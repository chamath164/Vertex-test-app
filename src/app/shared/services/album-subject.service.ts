import {Injectable} from '@angular/core';
import { Albums } from '../../interfaces/albums';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumSubjectService {
  private albumData = {} as Albums;
  private subject = new BehaviorSubject<Albums>(this.albumData);

  constructor() {
  }

  public sendAlbumData(album: Albums): void {
    this.albumData = album;
    return this.subject.next(album);
  }

  public getAlbumData(): Observable<Albums> {
    return this.subject.asObservable();
  }
}
