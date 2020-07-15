import { WlDrawable } from '@wl-engine/model/drawable.model';

export class WlStage implements WlDrawable {
  element: HTMLElement;
  private _refreshDrawables: WlDrawable[];

  constructor(private _stageId: string, private _drawables: WlDrawable[] = []) {
    if (document.readyState !== 'loading') {
      this.setup();
    } else {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    }
  }

  setup(): HTMLElement {
    this.element = document.getElementById(this._stageId);
    console.log(this.element);
    this._drawables.forEach((drawable) => {
      this.element.appendChild(drawable.setup());
    });
    return this.element;
  }

  update(): boolean {
    this._refreshDrawables = this._drawables.filter((drawable) => drawable.update());
    return this._refreshDrawables.length > 0;
  }

  draw(): void {
    this._refreshDrawables.forEach((drawable) => drawable.draw());
  }
}
