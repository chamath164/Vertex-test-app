import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Users} from '../../interfaces/users';


@Injectable({
  providedIn: 'root'
})
export class UserProfileSubjectService {
  private userData = {} as Users;
  private subject = new BehaviorSubject<Users>(this.userData);

  constructor() {
  }

  public sendUserProfileData(userProfile: Users): void {
    this.userData = userProfile;
    return this.subject.next(userProfile);
  }

  public getUserProfileData(): Observable<Users> {
    return this.subject.asObservable();
  }
}
