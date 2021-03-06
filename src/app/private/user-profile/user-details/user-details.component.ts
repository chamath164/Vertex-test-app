import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {Users} from '../../../interfaces/users';
import {UserProfileSubjectService} from '../../../shared/services/user-profile-subject.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  userProfileSubscription: Subscription;
  user = {} as Users;

  constructor(private userProfileSubjectService: UserProfileSubjectService) {
    this.userProfileSubscription = this.userProfileSubjectService.getUserProfileData()
      .subscribe(res => {
        this.user = res;
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }

}
