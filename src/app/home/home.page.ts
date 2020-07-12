import { Component, OnInit, OnDestroy } from '@angular/core';

import { PlayerService } from '../services/player.service';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  state: string;
  duration: number;
  seek: number;
  constructor(
    private playerService: PlayerService
  ) {
  }

  ngOnInit() {
    particlesJS.load('particles-js', './assets/data/particlesjs-config.json',
      () => {
        console.log('callback - particles.js config loaded');
      });
    this.playerService.duration.subscribe((secs) => this.duration = secs || 0);
    this.playerService.seek.subscribe((secs) => this.seek = secs || 0);
  }

  ngOnDestroy() {
    this.playerService.duration.unsubscribe();
    this.playerService.seek.unsubscribe();
  }

  start() {
    if (this.state != "playing") {
      this.state = "playing";
      this.playerService.play();
      setInterval(() => this.playerService.updateProgressBar(), 100);
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
