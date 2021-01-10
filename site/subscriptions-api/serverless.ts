import type { Serverless } from "serverless/aws";

const serverlessConfiguration: Serverless = {
  service: {
    name: "petri-works",
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },
  package: {
    excludeDevDependencies: true,
  },
  configValidationMode: "error",
  frameworkVersion: "2",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: {
        forceExclude: ["aws-sdk"],
      },
    },
    "serverless-offline": {
      httpPort: 4000,
    },
    dynamodb: {
      stages: "v1",
      start: {
        migrate: true,
        port: 8000,
        inMemory: true,
        heapInitial: "200m",
        heapMax: "1g",
        seed: true,
      },
    },
  },
  plugins: [
    "serverless-dynamodb-local",
    "serverless-offline",
    "serverless-webpack",
    "serverless-dotenv-plugin",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    region: "us-east-1",
    stage: "v1",
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
  },
  functions: {
    subscribePost: {
      handler: "lambdas/subscribePost.handler",
      events: [
        {
          http: {
            method: "POST",
            path: "subscribe",
            cors: true,
          },
        },
      ],
    },
  },
  resources: {
    Resources: {
      usersTable: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          TableName: "subscriptions",
          AttributeDefinitions: [
            {
              AttributeName: "email",
              AttributeType: "S",
            },
            {
              AttributeName: "name",
              AttributeType: "S",
            },
          ],
          KeySchema: [
            {
              AttributeName: "email",
              KeyType: "HASH",
            },
            {
              AttributeName: "name",
              KeyType: "RANGE",
            },
          ],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1,
          },
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
