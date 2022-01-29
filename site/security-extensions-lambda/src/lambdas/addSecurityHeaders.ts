import {
  CloudFrontResponseEvent,
  CloudFrontResponseHandler,
  Context,
  CloudFrontResponseCallback,
} from 'aws-lambda';

const TwoYears = 63072000;

export const handler: CloudFrontResponseHandler = (
  event: CloudFrontResponseEvent,
  _: Context,
  callback: CloudFrontResponseCallback
) => {
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  headers['strict-transport-security'] = [
    { key: 'Strict-Transport-Security', value: `max-age=${TwoYears}; includeSubdomains; preload` },
  ];
  headers['content-security-policy'] = [
    {
      key: 'Content-Security-Policy',
      value:
        "default-src 'self'; img-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; object-src 'none'; connect-src https://*.petri.works/",
    },
  ];
  headers['x-content-type-options'] = [{ key: 'X-Content-Type-Options', value: 'nosniff' }];
  headers['x-frame-options'] = [{ key: 'X-Frame-Options', value: 'DENY' }];
  headers['x-xss-protection'] = [{ key: 'X-XSS-Protection', value: '1; mode=block' }];
  headers['referrer-policy'] = [{ key: 'Referrer-Policy', value: 'same-origin' }];

  callback(null, response);
};
