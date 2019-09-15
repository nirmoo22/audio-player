import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {


  musicVolume = 1;
  currentProgress = 50;

  volumeMuteLabel = 'volume_off';
  volumeDownLabel = 'volume_down';
  volumeLabelDefault = 'volume_up';
  volumeLabel = this.volumeLabelDefault;

  constructor() { }

  ngOnInit() {
  }

  volumeChanged() {
    console.log('new volume is: ', this.musicVolume);
  }

  toggleVolume() {
    // TODO: change music volume to previous value
    // and use volumeDownLabel for some conditions
    if (this.musicVolume > 0) {
      this.musicVolume = 0;
      this.volumeLabel = this.volumeMuteLabel;
    } else {
      this.musicVolume = 1;
      this.volumeLabel = this.volumeLabelDefault;
    }
  }

}
