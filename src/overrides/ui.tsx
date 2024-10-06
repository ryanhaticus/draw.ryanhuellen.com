import type { TLUiOverrides } from 'tldraw';
import { buildEditorUIToolItem } from '../tools/editor/ui';

export const ui: TLUiOverrides = {
	tools(editor, tools) {
		tools.editor = buildEditorUIToolItem(editor);

		return tools;
	},
};
