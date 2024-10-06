import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

import { assetUrls } from './overrides/assetUrls';
import { components } from './overrides/components';
import { shapeUtils } from './overrides/shapeUtils';
import { tools } from './overrides/tools';
import { ui } from './overrides/ui';

function App() {
	return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw
				inferDarkMode={true}
				persistenceKey='draw.ryanhuellen.com'
				overrides={ui}
				components={components}
				tools={tools}
				shapeUtils={shapeUtils}
				assetUrls={assetUrls}
			/>
		</div>
	);
}

export default App;
