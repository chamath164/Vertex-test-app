import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserProfileSubjectService} from '../../../shared/services/user-profile-subject.service';
import {Router} from '@angular/router';
import {PostSubjectService} from '../../../shared/services/post-subject.service';
import {AlbumSubjectService} from '../../../shared/services/album-subject.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  hide = true;
  userId = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private userProfileSubjectService: UserProfileSubjectService,
    private postSubjectService: PostSubjectService,
    private albumSubjectService: AlbumSubjectService) {

  }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.authService.getUserById(this.userId).subscribe(res => {
      // LogIn
      if (res != null) {
        // show that in profile
        this.userProfileSubjectService.sendUserProfileData(res);
        this.router.navigate(['/posts']);
      }
    });

    this.authService.getPostsById(this.userId).subscribe(res => {
      if (res != null) {
        this.postSubjectService.sendPostData(res);
        this.router.navigate(['/posts']);
      }
    });

    this.authService.getAlbumsById(this.userId).subscribe(res => {
      if (res != null) {
        this.albumSubjectService.sendAlbumData(res);
        this.router.navigate(['/posts']);
      }
    });
  }
}
