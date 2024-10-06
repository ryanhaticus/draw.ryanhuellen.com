import { TldrawUiMenuItem, useIsToolSelected, useTools } from 'tldraw';

export const useUIMenuItem = (name: string) => {
	const tools = useTools();
	const isSelected = useIsToolSelected(tools[name]);

	return <TldrawUiMenuItem {...tools[name]} isSelected={isSelected} />;
};
