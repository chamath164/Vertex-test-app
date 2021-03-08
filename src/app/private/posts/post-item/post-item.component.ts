import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Subscription} from 'rxjs';
import {Posts} from '../../../interfaces/posts';
import {PostSubjectService} from '../../../shared/services/post-subject.service';
import {DialogBoxPostsComponent} from '../dialog-box/dialog-box-posts/dialog-box-posts.component';


@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit, OnDestroy {
  postSubscription: Subscription;
  post = {} as Posts;


  constructor(public dialog: MatDialog, private postSubjectService: PostSubjectService) {
    this.postSubscription = this.postSubjectService.getPostData()
      .subscribe(res => {
        this.post = res;
      });
  }

  ngOnInit(): void {
  }


  onDialogOpen(post: any): void {
    const dialogRef = this.dialog.open(DialogBoxPostsComponent);
    dialogRef.componentInstance.title = post.title;
    dialogRef.componentInstance.body = post.body;
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
