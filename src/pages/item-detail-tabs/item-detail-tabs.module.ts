import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailTabsPage } from './item-detail-tabs';

@NgModule({
  declarations: [
    ItemDetailTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailTabsPage),
  ]
})
export class ItemDetailTabsPageModule {}
