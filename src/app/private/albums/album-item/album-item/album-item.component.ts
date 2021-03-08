import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogBoxAlbumComponent} from '../../dialog-box-album/dialog-box-album.component';
import {AuthService} from '../../../../auth/services/auth.service';
import {Subscription} from 'rxjs';
import {Albums} from '../../../../interfaces/albums';
import {AlbumSubjectService} from '../../../../shared/services/album-subject.service';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent implements OnInit, OnDestroy {
  albumSubscription: Subscription;
  album = {} as Albums;

  constructor(public dialog: MatDialog, private albumSubjectService: AlbumSubjectService) {
    this.albumSubscription = this.albumSubjectService.getAlbumData()
      .subscribe(res => {
        this.album = res;
      });
  }

  ngOnInit(): void {
  }

  onDialogOpen(album: any): void {
    const dialogRef = this.dialog.open(DialogBoxAlbumComponent);
    dialogRef.componentInstance.id = album.id;
    dialogRef.componentInstance.title = album.title;
  }

  ngOnDestroy(): void {
    this.albumSubscription.unsubscribe();
  }
}
