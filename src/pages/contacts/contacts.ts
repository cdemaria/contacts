import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Contact } from '../../app/api/models/contact';
import { ContactService } from '../../app/api/services/contact.service';

/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  contacts: Contact[]  = [];

  constructor(
    private contactService: ContactService,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.contactService.allContacts
      .subscribe( contacts => {
        console.log(contacts);
        this.contacts = contacts;
      });
  }

  addContact() {
    console.log('add contact');
    this.contactService.createContact({
      firstName: 'Bruce',
      lastName: 'Springsteen',
      email: 'bspringsteen@rock.org'
    });
    // .then(() => {
    //   console.log('Successfully created new contact');
    // }).catch( (error) => {
    //   console.log(error);
    //   console.log(`Unable to create contact.  Please try again.`);
    // });
  }

  deleteContact(id: string) {
    console.log('delete contact with id', id);
    this.contactService.deleteContact(id).then(() => {
      console.log(`Successfully deleted contact ${id}`);
    }).catch( (error) => {
      console.log(error);
      console.log(`Unable to delete contact ${id}.  Please try again.`);
    });
  }


}
