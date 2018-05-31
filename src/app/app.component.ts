import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavProxyService } from '../services/NavProxy.service';
import { LoginPage } from '../pages/login/login';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    rootPage = LoginPage;
    @ViewChild("content") content:Nav;

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        private navProxy: NavProxyService) {

        platform.ready().then(() => {

            statusBar.styleDefault();
            splashScreen.hide();
        });

        //this.content.setRoot(this.rootPage);
    }
}

