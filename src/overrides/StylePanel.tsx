import {
	DefaultStylePanel,
	DefaultStylePanelContent,
	useRelevantStyles,
} from 'tldraw';
import { AWSServiceStylePanel } from '../styles/awsService/stylePanel';
import { LanguageStylePanel } from '../styles/language/stylePanel';

export const StylePanel = () => {
	const styles = useRelevantStyles();

	if (!styles) {
		return null;
	}

	return (
		<DefaultStylePanel>
			<DefaultStylePanelContent styles={styles} />
			<LanguageStylePanel />
			<AWSServiceStylePanel />
		</DefaultStylePanel>
	);
};
