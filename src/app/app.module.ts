import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './lib/material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { LoginFormComponent } from './auth/components/login-form/login-form.component';
import { AuthenticationComponent } from './auth/pages/authentication/authentication.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PrivateComponent } from './private/private.component';
import { UserProfileComponent } from './private/user-profile/user-profile.component';
import { UserDetailsComponent } from './private/user-profile/user-details/user-details.component';
import { TodoListComponent } from './private/user-profile/todo-list/todo-list.component';
import { PostsComponent } from './private/posts/posts.component';
import { AlbumsComponent } from './private/albums/albums.component';
import { CompletedComponent } from './private/user-profile/todo-list/completed/completed.component';


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
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
