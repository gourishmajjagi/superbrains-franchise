import { Injectable } from '@angular/core';

import { Howl } from 'howler';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  player: Howl = null;
  duration = new BehaviorSubject(0);
  seek = new BehaviorSubject(0);
  constructor() {
    this.player = new Howl(
      {
        src: './assets/audio/one.mp3',
        onplay: () => {
          console.log('play');
          this.duration.next(Math.round(this.player.duration()));

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

  updateProgressBar() {
    this.seek.next(Math.round(this.player.seek() || 0));
  }
}
