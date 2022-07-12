import { Component, Input, OnInit } from '@angular/core';
import { ISong } from '../../../shared/interfaces';
import { IBadge } from '../../../shared/interfaces/badge.interface';

@Component({
  selector: 'app-song-statistics',
  templateUrl: './song-statistics.component.html',
  styleUrls: ['./song-statistics.component.scss'],
})
export class SongStatisticsComponent implements OnInit {
  @Input() heading: string;
  // @Input() statistics: string;
  @Input() selectedSong: ISong;
  songBadges: IBadge[];

  constructor() {}

  ngOnInit() {
    this.songBadges = [
      {
        value: 'HIT',
        color: 'primary',
      },
      {
        value: this.selectedSong?.statistics?.youtubeViews + ' views',
        color: 'dark',
      },
    ];
  }
}
