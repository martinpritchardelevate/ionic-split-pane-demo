import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NavProxyService } from '../services/NavProxy.service';
import { MyApp } from './app.component';
import {
    LoginPage, MainPage, PlaceholderPage, ItemPage, ItemsPage, ItemsHerePage } from '../pages';

@NgModule({
    declarations: [
        MyApp,
        LoginPage, MainPage, PlaceholderPage, ItemPage, ItemsPage, ItemsHerePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage, 
        MainPage, 
        PlaceholderPage, 
        ItemPage, 
        ItemsHerePage, 
        ItemsPage
    ],
    providers: [
        NavProxyService,
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
