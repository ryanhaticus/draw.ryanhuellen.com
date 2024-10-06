import {
	BaseBoxShapeUtil,
	FONT_FAMILIES,
	HTMLContainer,
	LABEL_FONT_SIZES,
	type TLBaseShape,
	useIsDarkMode,
} from 'tldraw';

import { type EditorProps, editorProps, name } from './constants';

import CodeEditor from '@uiw/react-textarea-code-editor';
import { isShapeSelected } from '../../utils/isShapeSelected';
import { updateShape } from '../../utils/updateShape';

type EditorShapeProps = TLBaseShape<name, EditorProps>;

export class EditorShape extends BaseBoxShapeUtil<EditorShapeProps> {
	static override type = name;
	static override props = editorProps;

	getDefaultProps(): EditorProps {
		return {
			w: 1080,
			h: 520,
			content: '',
			size: 'm',
			font: 'draw',
		};
	}

	component(shape: EditorShapeProps) {
		const isDarkMode = useIsDarkMode();

		const conditionallyStopPropagation = (e: React.SyntheticEvent) => {
			if (!isShapeSelected(this.editor, shape)) {
				return;
			}

			e.stopPropagation();
		};

		return (
			<HTMLContainer
				style={{
					height: shape.props.h,
					width: shape.props.w,
					pointerEvents: 'all',
					overflow: 'hidden',
				}}>
				<CodeEditor
					value={shape.props.content}
					language='ts'
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
					onPointerDown={conditionallyStopPropagation}
					onTouchStart={conditionallyStopPropagation}
					onTouchEnd={conditionallyStopPropagation}
					onKeyDown={(e) => {
						const el = e.target as HTMLTextAreaElement;

						el.style.height = 'inherit';
						el.style.height = `${el.scrollHeight}px`;

						if (el.scrollHeight > shape.props.h) {
							updateShape(this.editor, shape, { h: el.scrollHeight });
						}
					}}
				/>
			</HTMLContainer>
		);
	}

	indicator({ props }: EditorShapeProps) {
		const { w, h } = props;
		return <rect width={w} height={h} />;
	}
}
