import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(@Inject('BASE_URL') private baseUrl: string,
              private http: HttpClient) {
  }

  public getUserPosts(): Observable<any> {
    return this.http.get(this.baseUrl + 'users/1/posts');
  }
}
