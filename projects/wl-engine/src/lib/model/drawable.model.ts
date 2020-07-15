export interface WlDrawable {
  x?: number;
  y?: number;
  element: HTMLElement;

  setup(): HTMLElement;
  update(): boolean;
  draw(): void;
}
