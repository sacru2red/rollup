import type * as NodeType from './NodeType';
import { NodeBase } from './shared/Node';

export default class EmptyStatement extends NodeBase {
	type!: NodeType.tEmptyStatement;

	hasEffects(): boolean {
		return false;
	}
}
