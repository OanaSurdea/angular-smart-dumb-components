import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { SongArtistsComponent } from './components/song-artists/song-artists.component';
import { SongWritersComponent } from './components/song-writers/song-writers.component';
import { SharedModule } from '../shared/shared.module';
import { SongListComponent } from './components/song-list/song-list.component';
import { SongStatisticsComponent } from './components/song-statistics/song-statistics.component';
import { SongDetailsComponent } from './components/song-details/song-details.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    SongsComponent,
    SongListComponent,
    SongDetailsComponent,
    SongArtistsComponent,
    SongWritersComponent,
    SongStatisticsComponent,
  ],
  exports: [
    SongsComponent,
    SongListComponent,
    SongDetailsComponent,
    SongArtistsComponent,
    SongWritersComponent,
    SongStatisticsComponent,
  ],
})
export class SongsModule {}
