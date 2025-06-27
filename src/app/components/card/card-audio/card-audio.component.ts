import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { CardAudioDicaComponent } from '../card-audio-dica/card-audio-dica.component';
import { log } from 'console';

@Component({
  selector: 'app-card-audio',
  standalone: true,
  imports: [CommonModule, CardAudioDicaComponent],
  templateUrl: './card-audio.component.html',
  styleUrls: ['./card-audio.component.css'],
})
export class CardAudioComponent {
  audio: HTMLAudioElement | null = null;
  isPlaying = false;
  mostrarDica = true;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.audio = new Audio('assets/audio/senya_crescent_sun__itachi.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.5;
    }
  }

  toggleAudio() {
		console.log(this.audio);
    if (!this.isBrowser || !this.audio) return;

    if (this.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }

    this.isPlaying = !this.isPlaying;
    this.mostrarDica = !this.isPlaying;
  }

  iniciarAudio() {
		console.log('chegou');
    if (!this.isBrowser || !this.audio) return;

    this.audio.play().then(() => {
      this.isPlaying = true;
      this.mostrarDica = false;
    }).catch(() => {
      this.isPlaying = false;
      this.mostrarDica = true;
    });
  }
}
