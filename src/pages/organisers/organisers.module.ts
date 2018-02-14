import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganisersPage } from './organisers';

@NgModule({
  declarations: [
    OrganisersPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganisersPage),
  ],
})
export class OrganisersPageModule {}
