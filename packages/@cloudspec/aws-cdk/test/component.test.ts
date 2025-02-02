import { cloudSpec } from '../lib';
import { Stack } from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { describe, expect, it } from 'vitest';

const cloud = cloudSpec();

describe('S3 Bucket Tests', () => {
  cloud.setup((stack: Stack, setOutputs) => {
    const bucket = new Bucket(stack, 'TestBucket');
    setOutputs({
      bucketName: bucket.bucketName,
    });
  });

  cloud.test('bucket should exist', async (outputs) => {
    const { bucketName } = outputs;
    expect(bucketName).toEqual(expect.stringMatching(/testbucket/))
  });
})
