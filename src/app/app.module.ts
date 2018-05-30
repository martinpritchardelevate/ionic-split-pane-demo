import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NavProxyService } from '../services/NavProxy.service';
import { MyApp } from './app.component';
import {
    ItemsPage,
    ItemPage,
    ItemsHerePage,
    PlaceholderPage } from '../pages';

@NgModule({
    declarations: [
        MyApp,
        ItemsPage,
        ItemPage,
        ItemsHerePage,
        PlaceholderPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ItemsPage,
        ItemsHerePage,
        ItemPage,
        PlaceholderPage
    ],
    providers: [
        NavProxyService,
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
