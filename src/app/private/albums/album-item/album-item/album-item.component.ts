import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogBoxAlbumComponent} from '../../dialog-box-album/dialog-box-album.component';
import {AuthService} from '../../../../auth/services/auth.service';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent implements OnInit {


  constructor(public dialog: MatDialog, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onDialogOpen(): void {
    this.dialog.open(DialogBoxAlbumComponent);
  }
}
