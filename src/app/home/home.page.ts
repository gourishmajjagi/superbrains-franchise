import { Component, OnInit } from '@angular/core';

import SineWaves from 'sine-waves';
import { PlayerService } from '../services/player.service';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  state: string;
  constructor(
    private playerService: PlayerService
  ) {
  }

  ngOnInit() {
    particlesJS.load('particles-js', './assets/data/particlesjs-config.json',
      () => {
        console.log('callback - particles.js config loaded');
      });
  }

  start() {
    if (this.state != "playing") {
      this.state = "playing";
      this.playerService.play();
    }
  }

  pause() {
    this.state = "pause";
    this.playerService.pause();
  }

  stop() {
    this.state = "stop";
    this.playerService.stop();
  }
}
