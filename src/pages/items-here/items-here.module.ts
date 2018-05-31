import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemsHerePage } from './items-here';

@NgModule({
    declarations: [
        ItemsHerePage,
    ],
    imports: [
        IonicPageModule.forChild(ItemsHerePage),
    ],
    exports: [
        ItemsHerePage
    ]
})
export class ItemsHerePageModule { }
