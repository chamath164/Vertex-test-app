import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box-album',
  templateUrl: './dialog-box-album.component.html',
  styleUrls: ['./dialog-box-album.component.scss']
})
export class DialogBoxAlbumComponent implements OnInit {
  @Input() album: any;
  public id!: number;
  public title!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
