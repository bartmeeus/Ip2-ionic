import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Theme } from '../../models/theme';
import { Themes } from '../../providers/providers';
import {ItemDetailTabsPage} from "../item-detail-tabs/item-detail-tabs";

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Theme[];

  constructor(public navCtrl: NavController, public items: Themes, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  /**
   * The view loaded, let's query our themes for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of themes.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Theme) {

    /* //TODO ItemDetailTabsPage GEEN BACK BUTTON BIJ TABS*/
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
