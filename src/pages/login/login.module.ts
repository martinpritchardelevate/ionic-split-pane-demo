import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { MainPage } from '../';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage
  ],
  entryComponents: [
    MainPage
  ]
})
export class LoginPageModule {}
