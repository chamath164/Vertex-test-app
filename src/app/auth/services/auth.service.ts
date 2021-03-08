import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Users} from '../../interfaces/users';
import {Posts} from '../../interfaces/posts';
import {Albums} from '../../interfaces/albums';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new Subject<any>();

  constructor(@Inject('BASE_URL') private baseUrl: string,
              private http: HttpClient) {
  }

  public getUserById(userId: string): Observable<Users> {
    return this.http.get<Users>(this.baseUrl + `users/${userId}`);
  }

  public getPostsById(userId: string): Observable<Posts> {
    return this.http.get<Posts>(this.baseUrl + `posts/${userId}`);
  }

  public getAlbumsById(userId: string): Observable<any> {
    return this.http.get<Albums>(this.baseUrl + `albums/${userId}`);
  }
}
