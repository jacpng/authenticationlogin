import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CoachlistPage } from '../pages/coachlist/coachlist';
import { SharepagePage } from '../pages/sharepage/sharepage';
import { DetailPage } from '../pages/detail/detail';
import { LoginPage } from '../pages/login/login'
import { IonicStorageModule } from '@ionic/storage';


import { HttpModule } from '@angular/http'
import { HttpProvider } from '../providers/http/http';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    CoachlistPage,
    SharepagePage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    CoachlistPage,
    SharepagePage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    AuthProvider
  ]
})
export class AppModule {}
