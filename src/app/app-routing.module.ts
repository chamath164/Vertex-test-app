import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthenticationComponent} from './auth/pages/authentication/authentication.component';
import {PrivateComponent} from './private/private.component';
import {UserProfileComponent} from './private/user-profile/user-profile.component';
import {PostsComponent} from './private/posts/posts.component';
import {AlbumsComponent} from './private/albums/albums.component';
import {CompletedComponent} from './private/user-profile/todo-list/completed/completed.component';
import {NotCompletedComponent} from './private/user-profile/todo-list/not-completed/not-completed.component';

const routes: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: 'private', component: PrivateComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'not-completed', component: NotCompletedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
