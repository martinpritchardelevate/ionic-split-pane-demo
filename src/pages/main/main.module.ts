import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NavProxyService } from '../../services/NavProxy.service';

import {
  ItemsPage,
  ItemPage,
  ItemsHerePage,
  PlaceholderPage } from '../';

@NgModule({
  declarations: [
    MainPage,
    ItemsPage,
        ItemPage,
        ItemsHerePage,
        PlaceholderPage
  ],
  imports: [
    BrowserModule,
        
    IonicPageModule.forChild(MainPage),
  ],
  exports: [
    MainPage
  ],
  providers: [
    NavProxyService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class MainPageModule {}
