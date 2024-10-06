import { useEditor, useIsDarkMode, useRelevantStyles } from 'tldraw';
import { awsServices } from './constants';
import { AWSServiceStyle } from './style';

export const AWSServiceStylePanel = () => {
	const styles = useRelevantStyles();
	const editor = useEditor();
	const isDarkMode = useIsDarkMode();

	if (styles === null) {
		return null;
	}

	const language = styles.get(AWSServiceStyle);

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
					color: isDarkMode ? '#fff' : '#000',
				}}
				value={language.type === 'mixed' ? '' : language.value}
				onChange={(e) => {
					editor.markHistoryStoppingPoint();

					const value = AWSServiceStyle.validate(
						awsServices[e.currentTarget.selectedIndex],
					);
					editor.setStyleForSelectedShapes(AWSServiceStyle, value);
				}}>
				{awsServices.map((service) => (
					<option
						style={{
							backgroundColor: 'var(--color-panel)',
						}}
						key={service}
						value={service}>
						{service}
					</option>
				))}
			</select>
		</div>
	);
};
