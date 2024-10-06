import {
	ArrowToolbarItem,
	DefaultKeyboardShortcutsDialog,
	DefaultToolbar,
	DrawToolbarItem,
	EllipseToolbarItem,
	EraserToolbarItem,
	HandToolbarItem,
	LaserToolbarItem,
	OvalToolbarItem,
	RectangleToolbarItem,
	SelectToolbarItem,
	type TLComponents,
	TextToolbarItem,
} from 'tldraw';
import { EditorToolbarItem } from '../tools/editor/ui';

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
			<OvalToolbarItem />
			<EraserToolbarItem />
			<EllipseToolbarItem />
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
};
