/**
 * Created by koenr on 20-2-2018.
 */
import { NgModule } from '@angular/core';
//import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginPage } from './login.component';

import { AuthService } from '../../providers/authetication/auth-service';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    AuthService,
    //TranslateModule.forChild()
  ],
  exports: [
    LoginPage,
    AuthService
  ]
})
export class LogincomponentModule { }
