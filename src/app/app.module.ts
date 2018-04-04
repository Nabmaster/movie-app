import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";

import { MovieDetailPage } from "../pages/movie-detail/movie-detail";
import { MovieListPage } from "../pages/movie-list/movie-list";
import { MyMoviesPage } from "../pages/my-movies/my-movies";

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieApiProvider } from '../providers/movie-api/movie-api';
import { FavoriteMovieProvider } from "../providers/favorite-movie/favorite-movie";

@NgModule({
  declarations: [MyApp,
    MyMoviesPage,
    MovieListPage,
    MovieDetailPage
  ],
  imports: [BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp,
    MyMoviesPage,
    MovieListPage,
    MovieDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieApiProvider,
    FavoriteMovieProvider
  ]
})
export class AppModule {}
