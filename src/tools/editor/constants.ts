import {
	DefaultFontStyle,
	DefaultSizeStyle,
	type RecordPropsType,
	T,
} from 'tldraw';

export const name = 'editor' as const;

export type name = typeof name;

export const editorProps = {
	w: T.number,
	h: T.number,
	content: T.string,
	size: DefaultSizeStyle,
	font: DefaultFontStyle,
} as const;

export type EditorProps = RecordPropsType<typeof editorProps>;
