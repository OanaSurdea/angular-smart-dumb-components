import { Component, Input, OnInit } from '@angular/core';
import { ISong } from '../../../shared/interfaces';

@Component({
  selector: 'app-song-writers',
  templateUrl: './song-writers.component.html',
  styleUrls: ['./song-writers.component.scss'],
})
export class SongWritersComponent implements OnInit {
  @Input() heading: string;
  @Input() selectedSong: ISong;

  constructor() {}

  ngOnInit() {}
}
