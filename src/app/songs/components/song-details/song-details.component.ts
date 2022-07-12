import { Component, Input, OnInit } from '@angular/core';
import { ISong } from '../../../shared/interfaces';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss'],
})
export class SongDetailsComponent implements OnInit {
  @Input() selectedSong: ISong;

  constructor() {}

  ngOnInit() {}
}
