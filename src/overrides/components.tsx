import {
	ArrowToolbarItem,
	DefaultKeyboardShortcutsDialog,
	DefaultToolbar,
	DrawToolbarItem,
	EllipseToolbarItem,
	EraserToolbarItem,
	HandToolbarItem,
	HighlightToolbarItem,
	LaserToolbarItem,
	OvalToolbarItem,
	RectangleToolbarItem,
	SelectToolbarItem,
	type TLComponents,
	TextToolbarItem,
} from 'tldraw';
import { EditorToolbarItem } from '../tools/editor/ui';
import { AWSToolbarItem } from '../tools/aws/ui';
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
			<OvalToolbarItem />
			<EllipseToolbarItem />
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
