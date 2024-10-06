import { type TLBaseShape, useEditor } from 'tldraw';

export const useIsEditingShape = ({ id }: TLBaseShape<string, object>) => {
	const editor = useEditor();

	return editor.getEditingShapeId() === id;
};
