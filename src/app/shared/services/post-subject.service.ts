import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Posts} from '../../interfaces/posts';


@Injectable({
  providedIn: 'root'
})
export class PostSubjectService {
  private postData = {} as Posts;
  private subject = new BehaviorSubject<Posts>(this.postData);

  constructor() {
  }

  public sendPostData(post: Posts): void {
    this.postData = post;
    return this.subject.next(post);
  }

  public getPostData(): Observable<Posts> {
    return this.subject.asObservable();
  }
}
