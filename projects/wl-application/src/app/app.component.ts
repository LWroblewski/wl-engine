import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WlEngine } from '@wl-engine';
import { spriteSheetIchigo } from './model/characters/ichigo-character';
import { WlDrawableSpriteSheet } from '@wl-engine/drawables/spritesheet-drawable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private _engine: WlEngine;

  ngOnInit() {
    this._engine = new WlEngine().init('game-stage', [
      new WlDrawableSpriteSheet({
        spriteSheetSrc: './assets/images/ichigo/spritesheet.png',
        spriteSheet: spriteSheetIchigo,
      }),
    ]);
  }
}
