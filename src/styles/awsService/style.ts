import { StyleProp, type T } from 'tldraw';
import { awsServices } from './constants';

export const AWSServiceStyle = StyleProp.defineEnum('aws-service', {
	defaultValue: 'S3',
	values: awsServices,
});

export type AWSServiceStyle = T.TypeOf<typeof AWSServiceStyle>;
