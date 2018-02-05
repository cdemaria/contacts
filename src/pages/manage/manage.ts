import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ManagePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html'
})
export class ManagePage {

  createRoot = 'CreatePage'
  editRoot = 'EditPage'
  contactsRoot = 'ContactsPage'


  constructor(public navCtrl: NavController) {}

}
