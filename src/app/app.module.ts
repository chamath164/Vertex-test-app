import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './lib/material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { AuthenticationComponent } from './auth/pages/authentication/authentication.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PrivateComponent } from './private/private.component';
import { UserProfileComponent } from './private/user-profile/user-profile.component';
import { UserDetailsComponent } from './private/user-profile/user-details/user-details.component';
import { TodoListComponent } from './private/user-profile/todo-list/todo-list.component';
import { PostsComponent } from './private/posts/posts.component';
import { AlbumsComponent } from './private/albums/albums.component';
import { CompletedComponent } from './private/user-profile/todo-list/completed/completed.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NotCompletedComponent } from './private/user-profile/todo-list/not-completed/not-completed.component';
import { DialogBoxAlbumComponent } from './private/albums/dialog-box-album/dialog-box-album.component';
import {HttpClientModule} from '@angular/common/http';
import { PostItemComponent } from './private/posts/post-item/post-item.component';
import { AlbumItemComponent } from './private/albums/album-item/album-item/album-item.component';
import {AuthService} from './auth/services/auth.service';
import { DialogBoxPostsComponent } from './private/posts/dialog-box/dialog-box-posts/dialog-box-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    AuthenticationComponent,
    PrivateComponent,
    UserProfileComponent,
    UserDetailsComponent,
    TodoListComponent,
    PostsComponent,
    AlbumsComponent,
    CompletedComponent,
    NotCompletedComponent,
    DialogBoxAlbumComponent,
    PostItemComponent,
    AlbumItemComponent,
    DialogBoxPostsComponent
  ],
  entryComponents: [DialogBoxPostsComponent, DialogBoxAlbumComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        MatDialogModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
