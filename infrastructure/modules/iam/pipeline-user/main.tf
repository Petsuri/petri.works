locals {
  arn_resources          = join(", ", formatlist("\"%s\"", var.s3_bucket_arns))
  arn_resources_wildcard = join(", ", formatlist("\"%s/*\"", var.s3_bucket_arns))
}

resource "aws_iam_user" "deployer" {
  name = "${var.environment}-pipeline-deploy"
}

resource "aws_iam_policy" "policy" {
  name   = "${var.environment}-pipeline-deploy-policy"
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:DeleteObject",
                "s3:GetBucketLocation",
                "s3:GetObject",
                "s3:ListBucket",
                "s3:PutObject",
                "s3:PutObjectAcl",
                "s3:ListAllMyBuckets"
            ],
            "Resource": [
              ${local.arn_resources}, 
              ${local.arn_resources_wildcard}
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
              "cloudfront:CreateInvalidation"
            ],
            "Resource": [
              "${var.cloudfront_arn}"
            ]
        }
    ]
}
EOF
}

resource "aws_iam_user_policy_attachment" "policy_attachment" {
  user       = aws_iam_user.deployer.name
  policy_arn = aws_iam_policy.policy.arn
}

resource "aws_iam_access_key" "access_key" {
  user = aws_iam_user.deployer.name
}
