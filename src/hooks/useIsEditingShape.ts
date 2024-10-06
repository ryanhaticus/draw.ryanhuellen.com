import { useEditor, type TLBaseShape } from 'tldraw';

export const useIsEditingShape = ({ id }: TLBaseShape<string, object>) => {
	const editor = useEditor();

	return editor.getEditingShapeId() === id;
};
