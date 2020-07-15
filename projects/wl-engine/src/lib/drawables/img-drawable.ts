import { WlCoreDrawable } from './core-drawable';

export interface WlDrawableImgOptions {
  src: string;
}

export class WlDrawableImg extends WlCoreDrawable<HTMLImageElement> {
  constructor(private _options: WlDrawableImgOptions) {
    super();
  }

  setup(): HTMLImageElement {
    this.element = document.createElement('img');
    this.element.style.position = 'absolute';
    this.element.src = this._options.src;
    return this.element;
  }

  update(): boolean {
    this.x++;
    this.y++;
    return true;
  }
}
