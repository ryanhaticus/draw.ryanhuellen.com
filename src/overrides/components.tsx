import {
	ArrowToolbarItem,
	DefaultKeyboardShortcutsDialog,
	DefaultToolbar,
	DrawToolbarItem,
	EraserToolbarItem,
	HandToolbarItem,
	HighlightToolbarItem,
	LaserToolbarItem,
	RectangleToolbarItem,
	SelectToolbarItem,
	type TLComponents,
	TextToolbarItem,
} from 'tldraw';
import { AWSToolbarItem } from '../tools/aws/ui';
import { EditorToolbarItem } from '../tools/editor/ui';
import { StylePanel } from './StylePanel';

const ToolbarItems = () => {
	return (
		<>
			<SelectToolbarItem />
			<HandToolbarItem />
			<DrawToolbarItem />
			<TextToolbarItem />
			<EditorToolbarItem />
			<ArrowToolbarItem />
			<RectangleToolbarItem />
			<AWSToolbarItem />
			<EraserToolbarItem />
			<HighlightToolbarItem />
			<LaserToolbarItem />
		</>
	);
};

export const components: TLComponents = {
	Toolbar: (props) => {
		return (
			<DefaultToolbar {...props}>
				<ToolbarItems />
			</DefaultToolbar>
		);
	},
	KeyboardShortcutsDialog: (props) => {
		return (
			<DefaultKeyboardShortcutsDialog {...props}>
				<ToolbarItems />
			</DefaultKeyboardShortcutsDialog>
		);
	},
	StylePanel: StylePanel,
};
