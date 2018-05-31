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
    selector: 'page-items-here',
    templateUrl: 'items-here.html',
})      
export class ItemsHerePage extends _MasterPage {

    items: Array<any> = [
        { id: 0, description: 'List Item Zero' },
        { id: 1, description: 'List Item One' },
        { id: 2, description: 'List Item Two' },
        { id: 3, description: 'List Item Three' },
        { id: 4, description: 'List Item Four' },
    ];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private navProxy: NavProxyService) {
        super();
    }

    onItemSelected(item) {
        // Rather than using:
        //     this.navCtrl.push(...)
        // Use our proxy:
        this.navProxy.pushDetail(ItemPage, item);
    }

}
