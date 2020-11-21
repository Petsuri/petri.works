locals {
  s3_origin_id = "${var.domain}-s3-origin"
  oneMonth     = 2592000
  oneWeek      = 604800
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "${var.domain} -bucket identity for Cloudfront distribution "
}

module "s3_distribution" {
  source                   = "../../storage/s3"
  environment              = var.environment
  bucket_name              = "${var.domain}-client-static-files"
  purpose_of_bucket        = "Bucket for ${var.domain} -domain static files"
  allowed_actions          = ["s3:GetObject"]
  bucket_policy_identifier = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
}

module "s3_distribution_logs" {
  source                   = "../../storage/s3"
  environment              = var.environment
  bucket_acl               = "bucket-owner-full-control"
  bucket_name              = "${var.domain}-client-static-files-access-logs"
  purpose_of_bucket        = "Bucket for ${var.domain} -domain static files access log"
  allowed_actions          = ["*"]
  bucket_policy_identifier = [aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn]
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = module.s3_distribution.bucket_regional_domain_name
    origin_id   = local.s3_origin_id

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }
  aliases             = [var.domain]
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Distribution for static files"
  default_root_object = "index.html"

  custom_error_response {
    error_code            = 403
    error_caching_min_ttl = local.oneWeek
    response_code         = 200
    response_page_path    = "/index.html"
  }

  logging_config {
    include_cookies = false
    bucket          = module.s3_distribution_logs.bucket_regional_domain_name
    prefix          = "log/"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl                = 0
    default_ttl            = local.oneWeek
    max_ttl                = local.oneMonth
    compress               = true
    viewer_protocol_policy = "redirect-to-https"
  }

  #Cache behavior with precedence 0
  # ordered_cache_behavior {
  #   path_pattern     = "index.html"
  #   allowed_methods  = ["GET", "HEAD", "OPTIONS"]
  #   cached_methods   = ["GET", "HEAD", "OPTIONS"]
  #   target_origin_id = local.s3_origin_id

  #   forwarded_values {
  #     query_string = false

  #     cookies {
  #       forward = "none"
  #     }
  #   }

  #   min_ttl                = 0
  #   default_ttl            = local.oneWeek
  #   max_ttl                = local.oneWeek
  #   compress               = true
  #   viewer_protocol_policy = "redirect-to-https"
  # }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Environment = var.environment
  }

  viewer_certificate {
    acm_certificate_arn      = var.acm_certificate_arn
    minimum_protocol_version = "TLSv1"
    ssl_support_method       = "sni-only"
  }
}
