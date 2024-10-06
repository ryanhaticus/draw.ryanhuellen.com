import { StyleProp, type T } from 'tldraw';
import { languages } from './constants';

export const LanguageStyle = StyleProp.defineEnum('language', {
	defaultValue: languages[0],
	values: languages,
});

export type LanguageStyle = T.TypeOf<typeof LanguageStyle>;
