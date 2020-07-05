import { Injectable } from '@angular/core';

import { Howl } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  player: Howl = null;

  constructor() {
    this.player = new Howl(
      {
        src: './assets/audio/audio.mp3',
        onplay: () => {
          console.log('play');
        },
        onend: () => {
          console.log('end');

        }
      }
    );
  }


  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  stop() {
    this.player.stop();
  }
}
