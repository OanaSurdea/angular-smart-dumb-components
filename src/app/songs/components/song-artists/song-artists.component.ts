import { Component, Input, OnInit } from '@angular/core';
import { ISong } from '../../../shared/interfaces';

@Component({
  selector: 'app-song-artists',
  templateUrl: './song-artists.component.html',
  styleUrls: ['./song-artists.component.scss'],
})
export class SongArtistsComponent implements OnInit {
  @Input() heading: string;
  @Input() selectedSong: ISong;

  constructor() {}

  ngOnInit() {}
}
