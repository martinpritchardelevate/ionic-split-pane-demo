import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { _DetailPage } from '../';

@IonicPage()
@Component({
    selector: 'page-item',
    templateUrl: 'item.html',
})
export class ItemPage extends _DetailPage {

    item: any = null;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        super();
        this.item = navParams.data;
    }

}
