import type { Editor, TLUiToolItem } from 'tldraw';

import { useUIMenuItem } from '../../hooks/useUIMenuItem';
import { name } from './constants';

export const buildEditorUIToolItem = (editor: Editor): TLUiToolItem => ({
	id: name,
	icon: 'code',
	label: 'Editor',
	kbd: 'c',
	onSelect: () => editor.setCurrentTool(name),
});

export const EditorToolbarItem = () => useUIMenuItem(name);
