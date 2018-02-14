import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailCategoriesPage } from './item-detail-categories';

@NgModule({
  declarations: [
    ItemDetailCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailCategoriesPage),
  ],
})
export class ItemDetailCategoriesPageModule {}
