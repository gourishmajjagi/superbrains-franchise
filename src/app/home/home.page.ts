import { Component, OnInit } from '@angular/core';

import SineWaves from 'sine-waves';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // particlesJS.load('particles-js', './assets/data/particlesjs-config.json',
    //   () => {
    //     console.log('callback - particles.js config loaded');
    //   });

    const waves = new SineWaves({
      // Canvas Element
      el: document.getElementById('waves'),

      // General speed of entire wave system
      speed: 4,
      width: '640px',
      height: '150px',
      ease: 'SineInOut',

      wavesWidth: '70%',

      waves: [
        {
          timeModifier: 4,
          lineWidth: 1,
          amplitude: -25,
          wavelength: 25
        },
        {
          timeModifier: 2,
          lineWidth: 2,
          amplitude: -50,
          wavelength: 50
        },
        {
          timeModifier: 1,
          lineWidth: 1,
          amplitude: -100,
          wavelength: 100
        },
        {
          timeModifier: 0.5,
          lineWidth: 1,
          amplitude: -200,
          wavelength: 200
        },
        {
          timeModifier: 0.25,
          lineWidth: 2,
          amplitude: -400,
          wavelength: 400
        }
      ],

      // Perform any additional initializations here
    });
  }
}
