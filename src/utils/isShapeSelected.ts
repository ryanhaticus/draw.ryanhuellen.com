import type { Editor, TLBaseShape } from 'tldraw';

export const isShapeSelected = (
	editor: Editor,
	shape: TLBaseShape<string, object>,
) => editor.getOnlySelectedShapeId() === shape.id;
