import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISong } from '../../shared/interfaces';
import { SONGS } from '../mock-data';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  dataSource: ISong[] = SONGS;

  constructor() {}

  getAll(): Observable<ISong[]> {
    return of(this.dataSource);
  }
}
