import { WlCoreDrawable } from './core-drawable';
import { WlSpriteSheet, WlSprite, WlAnimation } from '@wl-engine/model/spritesheet.model';

export interface WlDrawableSpriteSheetOptions {
  spriteSheetSrc: string;
  spriteSheet: WlSpriteSheet;
}

export class WlDrawableSpriteSheet extends WlCoreDrawable<HTMLDivElement> {
  private _currentAnimation: WlAnimation;
  private _currentSprite: WlSprite;
  private _currentAnimationDuration: number;
  private _currentAnimationIndex = 0;

  constructor(private _options: WlDrawableSpriteSheetOptions) {
    super();
  }

  setup(): HTMLDivElement {
    this.element = document.createElement('div');
    this.element.style.position = 'absolute';
    this.element.style.backgroundImage = `url('${this._options.spriteSheetSrc}')`;
    this.element.style.backgroundRepeat = 'no-repeat';

    this._currentAnimation = this._options.spriteSheet.animations[this._options.spriteSheet.startingAnimation];

    this._updateCurrentSprite();

    return this.element;
  }

  update(): boolean {
    this._currentAnimationDuration--;
    //this.x += 8;
    if (this._currentAnimationDuration === 0) {
      this._currentAnimationIndex++;
      this._incrementCurrentSpriteIndex();
      return true;
    }
    return false;
  }

  protected _incrementCurrentSpriteIndex() {
    this._currentAnimationIndex =
      this._currentAnimationIndex === this._currentAnimation.sprites.length - 1 ? 0 : this._currentAnimationIndex + 1;
    this._updateCurrentSprite();
  }

  protected _updateCurrentSprite() {
    this._currentSprite = this._currentAnimation.sprites[this._currentAnimationIndex];
    this._currentAnimationDuration = this._currentSprite.delay || 7;
    this.element.style.backgroundPosition = `${-this._currentSprite.x}px ${-this._currentSprite.y}px`;
    this.element.style.width = this._currentSprite.width + 'px';
    this.element.style.height = this._currentSprite.height + 'px';
  }
}
