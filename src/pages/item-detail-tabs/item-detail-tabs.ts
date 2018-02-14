import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {ItemDetailPage} from "../item-detail/item-detail";
import {ItemDetailCategoriesPage} from "../item-detail-categories/item-detail-categories";

/**
 * Generated class for the ItemDetailTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail-tabs',
  templateUrl: 'item-detail-tabs.html'
})
export class ItemDetailTabsPage {

  overviewRoot = 'ItemDetailPage'
  categoriesRoot = 'ItemDetailCategoriesPage'
  organisersRoot = 'OrganisersPage'
  cardsRoot = 'CardsPage'


  constructor(public navCtrl: NavController) {}

}
