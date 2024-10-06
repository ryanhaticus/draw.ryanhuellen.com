import {
	DefaultFontStyle,
	DefaultSizeStyle,
	type RecordPropsType,
	T,
} from 'tldraw';
import { LanguageStyle } from '../../styles/language/style';

export const name = 'editor' as const;

export type name = typeof name;

export const editorProps = {
	w: T.number,
	h: T.number,
	content: T.string,
	size: DefaultSizeStyle,
	font: DefaultFontStyle,
	language: LanguageStyle,
} as const;

export type EditorProps = RecordPropsType<typeof editorProps>;
