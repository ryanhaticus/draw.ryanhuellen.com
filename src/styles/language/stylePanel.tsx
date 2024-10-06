import { useEditor, useRelevantStyles } from 'tldraw';
import { LanguageStyle } from './style';
import { languages } from './constants';

export const LanguageStylePanel = () => {
	const styles = useRelevantStyles();
	const editor = useEditor();

	if (styles === null) {
		return null;
	}

	const language = styles.get(LanguageStyle);

	if (language === undefined) {
		return null;
	}

	return (
		<div
			style={{
				padding: '7px var(--space-4)',
			}}>
			<select
				aria-label='language'
				style={{
					width: '100%',
					border: 'none',
					backgroundColor: 'var(--color-hint)',
					padding: 'var(--space-2)',
					borderRadius: 'var(--radius-2)',
				}}
				value={language.type === 'mixed' ? '' : language.value}
				onChange={(e) => {
					editor.markHistoryStoppingPoint();

					const value = LanguageStyle.validate(
						languages[e.currentTarget.selectedIndex],
					);
					editor.setStyleForSelectedShapes(LanguageStyle, value);
				}}>
				{languages.map((lang) => (
					<option
						style={{
							backgroundColor: 'var(--color-panel)',
						}}
						key={lang}
						value={lang}>
						{lang}
					</option>
				))}
			</select>
		</div>
	);
};
