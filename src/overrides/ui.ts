import type { TLUiOverrides } from 'tldraw';
import { buildAWSUIToolItem } from '../tools/aws/ui';
import { buildEditorUIToolItem } from '../tools/editor/ui';

export const ui: TLUiOverrides = {
	tools(editor, tools) {
		tools.editor = buildEditorUIToolItem(editor);
		tools.aws = buildAWSUIToolItem(editor);

		return tools;
	},
};
