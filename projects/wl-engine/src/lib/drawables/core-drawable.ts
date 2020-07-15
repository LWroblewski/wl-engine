import { WlDrawable } from '@wl-engine/model/drawable.model';

export abstract class WlCoreDrawable<T extends HTMLElement> implements WlDrawable {
  x: number = 0;
  y: number = 0;
  element: T;

  abstract setup(): T;

  abstract update(): boolean;

  draw(): void {
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';
  }
}
