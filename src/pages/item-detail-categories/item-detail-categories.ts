import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Themes} from "../../providers/providers";

/**
 * Generated class for the ItemDetailCategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail-categories',
  templateUrl: 'item-detail-categories.html',
})
export class ItemDetailCategoriesPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Themes) {
    this.item = navParams.get('item') || items.defaultTheme;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailCategoriesPage');
  }

}
