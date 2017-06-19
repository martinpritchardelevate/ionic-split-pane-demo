import { Component } from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams } from 'ionic-angular';
import { NavProxyService } from '../../services/NavProxy.service';
import {
    _MasterPage,
    ItemPage } from '../';

@IonicPage()
@Component({
    selector: 'page-items',
    templateUrl: 'items.html',
})
export class ItemsPage extends _MasterPage {

    detailNavCtrl: NavController = null

    items: Array<any> = [
        { id: 0, description: 'Master Item Zero' },
        { id: 1, description: 'Master Item One' },
        { id: 2, description: 'Master Item Two' },
        { id: 3, description: 'Master Item Three' },
        { id: 4, description: 'Master Item Four' },
        { id: 5, description: 'Master Item Five' },
        { id: 6, description: 'Master Item Six' },
        { id: 7, description: 'Master Item Seven' },
        { id: 8, description: 'Master Item Eight' },
        { id: 9, description: 'Master Item Nine' },
    ];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private navProxy: NavProxyService) {
        super();
        this.detailNavCtrl = navParams.data.detailNavCtrl;

    }

    onItemSelected(item) {
        this.navProxy.pushDetail(ItemPage, item);
    }

}
