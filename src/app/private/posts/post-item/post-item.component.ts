import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Subscription} from 'rxjs';
import {DialogBoxAlbumComponent} from '../../albums/dialog-box-album/dialog-box-album.component';
import {Posts} from '../../../interfaces/posts';
import {PostSubjectService} from '../../../shared/services/post-subject.service';


@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit, OnDestroy {
  postSubscription: Subscription;
  post = {} as Posts;
  // posts: Posts[] = [];

  constructor(public dialog: MatDialog, private postSubjectService: PostSubjectService) {
    this.postSubscription = this.postSubjectService.getPostData()
      .subscribe(res => {
        this.post = res;
      });
  }


  ngOnInit(): void {
  }

  onDialogOpen(): void {
    this.dialog.open(DialogBoxAlbumComponent);
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
