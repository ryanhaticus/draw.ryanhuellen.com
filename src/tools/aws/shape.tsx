import { BaseBoxShapeUtil, HTMLContainer, type TLBaseShape } from 'tldraw';

import { type AWSProps, awsProps, name } from './constants';

type AWSShapeProps = TLBaseShape<name, AWSProps>;

export class AWSShape extends BaseBoxShapeUtil<AWSShapeProps> {
	static override type = name;
	static override props = awsProps;

	getDefaultProps(): AWSProps {
		return {
			w: 200,
			h: 200,
			awsService: 'S3',
		};
	}

	component(shape: AWSShapeProps) {
		const fileName = shape.props.awsService.toLowerCase().replace(/\s/g, '-');

		console.log(fileName);

		return (
			<HTMLContainer
				style={{
					height: shape.props.h,
					width: shape.props.w,
					pointerEvents: 'none',
					overflow: 'hidden',
				}}>
				<img
					src={`./icons/aws/${fileName}.svg`}
					alt={shape.props.awsService}
					loading='lazy'
					width={shape.props.w}
					height={shape.props.h}
				/>
			</HTMLContainer>
		);
	}

	indicator({ props }: AWSShapeProps) {
		const { w, h } = props;
		return <rect width={w} height={h} />;
	}
}
