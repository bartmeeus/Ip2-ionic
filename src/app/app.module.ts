import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Themes} from "../providers/providers";
import {ListMasterPage} from "../pages/list-master/list-master";
import {HttpClientModule} from "@angular/common/http";
import {Api} from "../providers/api/api";
import {ItemDetailPage} from "../pages/item-detail/item-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListMasterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage,
     ListMasterPage
  ],
  providers: [
    Api,
    Themes,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
