import type { TLUiOverrides } from 'tldraw';
import { buildEditorUIToolItem } from '../tools/editor/ui';
import { buildAWSUIToolItem } from '../tools/aws/ui';

export const ui: TLUiOverrides = {
	tools(editor, tools) {
		tools.editor = buildEditorUIToolItem(editor);
		tools.aws = buildAWSUIToolItem(editor);

		return tools;
	},
};
