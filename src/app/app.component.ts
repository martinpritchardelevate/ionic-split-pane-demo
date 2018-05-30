import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavProxyService } from '../services/NavProxy.service';
import { ItemsPage } from '../pages/items/items';
import { ItemsHerePage } from '../pages/items-here/items-here'
import { PlaceholderPage } from '../pages/placeholder/placeholder';
import { _MasterPage } from '../pages';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    masterPages: Array<{title: string, component: _MasterPage}>;

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

        this.masterPages = [
            {title : "One", component: ItemsPage},
            {title: "Two", component: ItemsHerePage}
        ];

        platform.ready().then(() => {

            statusBar.styleDefault();
            splashScreen.hide();

            // Add our nav controllers to
            // the nav proxy service...
            navProxy.masterNav = this.masterNav;
            navProxy.detailNav = this.detailNav;

            // set initial pages for
            // our nav controllers...
            this.masterNav.setRoot(ItemsPage, { detailNavCtrl: this.detailNav });
            this.detailNav.setRoot(PlaceholderPage);

        });

    }

    onMenuItemChanged(menuItem){
        //console.log(menuItem);
        this.navProxy.pushMaster(menuItem.component);
        this.menu.close();
    }
}

