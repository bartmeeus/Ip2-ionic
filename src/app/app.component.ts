import {Component, ViewChild} from '@angular/core';
import {Nav, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ListMasterPage} from "../pages/list-master/list-master";
import {LoginPage} from "../pages/login/login.component";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;//ListMasterPage;

  @ViewChild(Nav) nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

