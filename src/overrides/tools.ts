import { AWSTool } from '../tools/aws/tool';
import { EditorTool } from '../tools/editor/tool';

export const tools = [EditorTool, AWSTool] as const;
