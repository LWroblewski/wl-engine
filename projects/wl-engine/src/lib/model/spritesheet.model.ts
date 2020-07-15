export type WlAnimationType = 'stance' | 'run';

export interface WlSprite {
  x: number;
  y: number;
  width: number;
  height: number;
  delay?: number;
}

export interface WlAnimation {
  sprites: WlSprite[];
}

export interface WlSpriteSheet {
  startingAnimation?: WlAnimationType;
  animations: { [key: string]: WlAnimation };
}
