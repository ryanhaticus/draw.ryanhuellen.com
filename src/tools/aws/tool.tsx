import { BaseBoxShapeTool } from 'tldraw';
import { name } from './constants';

export class AWSTool extends BaseBoxShapeTool {
	static override id = name;
	override shapeType = name;

	static override initial = 'idle';
}
