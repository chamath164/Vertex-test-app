import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box-posts',
  templateUrl: './dialog-box-posts.component.html',
  styleUrls: ['./dialog-box-posts.component.scss']
})
export class DialogBoxPostsComponent implements OnInit {
  @Input() post: any;
  public title!: string;
  public body!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }


}
