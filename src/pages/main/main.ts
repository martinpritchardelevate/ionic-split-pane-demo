import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavProxyService } from '../../services/NavProxy.service';
import { ItemsPage } from '../items/items';
import { ItemsHerePage } from '../items-here/items-here'
import { PlaceholderPage } from '../placeholder/placeholder';
import { _MasterPage } from '../';

/**
 * Generated class for the MainPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-main',
    templateUrl: 'main.html',
})
export class MainPage {

    masterPages: Array<{ title: string, icon: string, component: _MasterPage }>;

    // Grab References to our 2 NavControllers...
    @ViewChild('detailNav') detailNav: Nav;
    @ViewChild('masterNav') masterNav: Nav;

    // Empty placeholders for the 'master/detail' pages...
    masterPage: any = null;
    detailPage: any = null;

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        private navProxy: NavProxyService,
        private menu: MenuController) {
        // removed this from the html template: (ionChange)="navProxy.onSplitPaneChanged($event._visible);"
    }

    ionViewDidLoad(){

        this.masterPages = [
            { title: "One", icon: "star", component: ItemsPage },
            { title: "Two", icon: "appstore", component: ItemsHerePage }
        ];

        // Add our nav controllers to
        // the nav proxy service...
        this.navProxy.masterNav = this.masterNav;
        this.navProxy.detailNav = this.detailNav;

        // set initial pages for
        // our nav controllers...
        this.masterNav.setRoot(ItemsPage, { detailNavCtrl: this.detailNav });
        this.detailNav.setRoot(PlaceholderPage);
    }

    onMenuItemChanged(menuItem) {
        //console.log(menuItem);
        this.navProxy.pushMaster(menuItem.component);
        this.menu.close();
    }
}
