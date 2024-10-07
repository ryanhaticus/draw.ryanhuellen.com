import type { Editor, TLUiToolItem } from 'tldraw';

import { useUIMenuItem } from '../../hooks/useUIMenuItem';
import { name } from './constants';

export const buildAWSUIToolItem = (editor: Editor): TLUiToolItem => ({
	id: name,
	icon: 'aws',
	label: 'AWS',
	kbd: 'w',
	onSelect: () => editor.setCurrentTool(name),
});

export const AWSToolbarItem = () => useUIMenuItem(name);
