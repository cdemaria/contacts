import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManagePage } from './manage';

@NgModule({
  declarations: [
    ManagePage,
  ],
  imports: [
    IonicPageModule.forChild(ManagePage),
  ],
  exports: [
    ManagePage
  ]
})
export class ManagePageModule {}
