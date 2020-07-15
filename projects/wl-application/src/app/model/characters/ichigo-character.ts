import { WlSpriteSheet } from '@wl-engine/model/spritesheet.model';

export const spriteSheetIchigo: WlSpriteSheet = {
  startingAnimation: 'run',
  animations: {
    run: {
      sprites: [
        {
          x: 1,
          y: 1,
          width: 82,
          height: 90,
        },
        {
          x: 85,
          y: 1,
          width: 80,
          height: 88,
        },
        {
          x: 85,
          y: 91,
          width: 80,
          height: 80,
        },
        {
          x: 167,
          y: 1,
          width: 84,
          height: 82,
        },
        {
          x: 167,
          y: 85,
          width: 82,
          height: 82,
        },
        {
          x: 167,
          y: 169,
          width: 83,
          height: 82,
        },
      ],
    },
  },
};
