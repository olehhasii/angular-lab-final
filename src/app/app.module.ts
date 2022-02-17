import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { GamesComponent } from './components/games/games.component';
import { FriendsComponent } from './components/friends/friends.component';
import { LibraryGamesComponent } from './components/library-games/library-games.component';
import { ProfileComponent } from './components/profile/profile.component';


const AppRoutes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'games', component: GamesComponent},
  {path: 'library', component: LibraryGamesComponent},
  {path: 'friends', component: FriendsComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    GamesComponent,
    FriendsComponent,
    LibraryGamesComponent,
    ProfileComponent

  ],
  imports: [BrowserModule, 
    AppRoutingModule, 
    RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
