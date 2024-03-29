import type { AWS } from '@serverless/typescript';
const serverlessConfiguration: AWS = {
  service: 'security-extensions-lambda',
  frameworkVersion: '3',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  functions: {
    addSecurityHeaders: {
      handler: 'src/lambdas/addSecurityHeaders.handler',
      events: [
        {
          http: {
            method: 'POST',
            path: '/',
            cors: true,
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
