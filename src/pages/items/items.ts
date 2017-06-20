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
        { id: 0, description: 'List Item Zero' },
        { id: 1, description: 'List Item One' },
        { id: 2, description: 'List Item Two' },
        { id: 3, description: 'List Item Three' },
        { id: 4, description: 'List Item Four' },
        { id: 5, description: 'List Item Five' },
        { id: 6, description: 'List Item Six' },
        { id: 7, description: 'List Item Seven' },
        { id: 8, description: 'List Item Eight' },
        { id: 9, description: 'List Item Nine' },
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
