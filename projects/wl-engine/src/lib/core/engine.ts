import { WlDrawable } from '../model/drawable.model';
import { WlStage } from './stage';

export class WlEngine {
  private _mainLoopFn;
  private _stage: WlStage;

  init(stageId: string, drawables?: WlDrawable[]): this {
    this._stage = new WlStage(stageId, drawables);

    this._mainLoopFn = this._mainLoop.bind(this);
    requestAnimationFrame(this._mainLoopFn);
    return this;
  }

  private _mainLoop() {
    if (this._stage.update()) {
      this._stage.draw();
    }
    requestAnimationFrame(this._mainLoopFn);
  }
}
