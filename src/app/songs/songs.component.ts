import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, first, Observable, take } from 'rxjs';
import { SongsService } from '../core/services';
import { ISong } from '../shared/interfaces';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {
  songs$: Observable<ISong[]>;
  selectedSong$: BehaviorSubject<ISong> = new BehaviorSubject(null);

  constructor(private songsService: SongsService) {}

  ngOnInit() {
    this._initSongs();
    this._initSelectedSong();
  }

  handleSongSelect(song: ISong): void {
    this.selectedSong$.next(song);
    console.log(song);
  }

  private _initSongs(): void {
    this.songs$ = this.songsService.getAll();
  }

  private _initSelectedSong(): void {
    this.songs$.pipe(first()).subscribe((s: ISong[]) => {
      this.selectedSong$.next(s[0]);
    });
  }
}
