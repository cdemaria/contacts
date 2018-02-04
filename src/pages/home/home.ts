import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Contact } from '../../app/api/models/contact';
import { ContactService } from '../../app/api/services/contact.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contacts: Contact[]  = [];

  constructor(
    public navCtrl: NavController,
    private contactService: ContactService
  ) { }

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
  }

  deleteContact(id: string) {
    console.log('delete contact with id', id);
  }

}
