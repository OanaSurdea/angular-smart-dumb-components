import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISong } from '../../../shared/interfaces';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
})
export class SongListComponent implements OnInit {
  @Input() heading: string;
  @Input() songs: ISong[];
  @Input() selectedSong: ISong;

  @Output() onSongSelect: EventEmitter<ISong> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectSong(song: ISong): void {
    if (song?.title === this.selectedSong?.title) {
      this.onSongSelect.emit(null);
      return;
    }

    this.onSongSelect.emit(song);
  }
}
