import type { Editor, TLShape, TLShapePartial } from 'tldraw';

export const updateShape = <S extends TLShape>(
	editor: Editor,
	shape: S | null,
	updatedProps: Partial<S['props']>,
) => {
	if (shape == null) {
		return;
	}

	const { id, type, meta, props } = shape;

	editor.updateShape({
		id,
		type,
		meta,
		props: {
			...props,
			...updatedProps,
		},
	} as TLShapePartial<S>);
};
