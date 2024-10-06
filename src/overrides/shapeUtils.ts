import { AWSShape } from '../tools/aws/shape';
import { EditorShape } from '../tools/editor/shape';

export const shapeUtils = [EditorShape, AWSShape] as const;
