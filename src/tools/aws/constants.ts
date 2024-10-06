import { type RecordPropsType, T } from 'tldraw';
import { AWSServiceStyle } from '../../styles/awsService/style';

export const name = 'aws' as const;

export type name = typeof name;

export const awsProps = {
	w: T.number,
	h: T.number,
	awsService: AWSServiceStyle,
} as const;

export type AWSProps = RecordPropsType<typeof awsProps>;
