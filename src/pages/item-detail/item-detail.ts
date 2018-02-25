import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Themes } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  editing: any;
  detailtype: string ="overview";

  constructor(public navCtrl: NavController, navParams: NavParams, items: Themes) {
    this.item = navParams.get('item') || items.defaultTheme;
  }

  save() {
    this.editing = 0;
    // thema opslaan via call in service

  }
}
