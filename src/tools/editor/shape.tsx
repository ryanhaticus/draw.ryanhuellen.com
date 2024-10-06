import {
	BaseBoxShapeUtil,
	FONT_FAMILIES,
	HTMLContainer,
	LABEL_FONT_SIZES,
	stopEventPropagation,
	type TLBaseShape,
	useIsDarkMode,
} from 'tldraw';

import { type EditorProps, editorProps, name } from './constants';

import CodeEditor from '@uiw/react-textarea-code-editor';
import { updateShape } from '../../utils/updateShape';
import { useIsEditingShape } from '../../hooks/useIsEditingShape';
import { useEffect, useRef } from 'react';

type EditorShapeProps = TLBaseShape<name, EditorProps>;

export class EditorShape extends BaseBoxShapeUtil<EditorShapeProps> {
	static override type = name;
	static override props = editorProps;

	override canEdit() {
		return true;
	}

	getDefaultProps(): EditorProps {
		return {
			w: 1080,
			h: 520,
			content: '',
			size: 'm',
			font: 'draw',
			language: 'TypeScript',
		};
	}

	component(shape: EditorShapeProps) {
		const isDarkMode = useIsDarkMode();
		const isEditingShape = useIsEditingShape(shape);
		const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

		useEffect(() => {
			if (!isEditingShape) {
				return;
			}

			setTimeout(() => {
				if (!textAreaRef.current) {
					return;
				}

				textAreaRef.current.focus();
			}, 10);
		}, [isEditingShape]);

		return (
			<HTMLContainer
				id={shape.id}
				onPointerDown={isEditingShape ? stopEventPropagation : undefined}
				style={{
					height: shape.props.h,
					width: shape.props.w,
					pointerEvents: isEditingShape ? 'all' : 'none',
					overflow: 'hidden',
				}}>
				<CodeEditor
					value={shape.props.content}
					ref={textAreaRef}
					language={shape.props.language.toLowerCase()}
					data-color-mode={isDarkMode ? 'dark' : 'light'}
					id={shape.id}
					placeholder='// Write some code...'
					padding={15}
					style={{
						fontSize: LABEL_FONT_SIZES[shape.props.size],
						fontFamily: FONT_FAMILIES[shape.props.font],
						height: shape.props.h,
					}}
					onChange={(e) =>
						updateShape(this.editor, shape, { content: e.target.value })
					}
				/>
			</HTMLContainer>
		);
	}

	indicator({ props }: EditorShapeProps) {
		const { w, h } = props;
		return <rect width={w} height={h} />;
	}
}
