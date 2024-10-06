import { BaseBoxShapeTool } from 'tldraw';
import { name } from './constants';

export class EditorTool extends BaseBoxShapeTool {
	static override id = name;
	override shapeType = name;

	static override initial = 'idle';
}
