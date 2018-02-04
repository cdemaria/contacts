import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Contact } from '../models/contact';

@Injectable()
export class ContactService {
  contacts: Observable<Contact[]>;
  contactsCollectionRef: AngularFirestoreCollection<Contact>;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.afAuth.auth.signInAnonymously();
    this.contactsCollectionRef = this.afs.collection('contacts');
    // this.contacts = this.contactsCollectionRef.valueChanges();
    this.contacts = this._getContacts();
  }

  _getContacts(): Observable<Contact[]> {
    return this.contactsCollectionRef
      .snapshotChanges()
      .map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Contact;
          return {
            firstName: data.firstName,
            lastName: data.lastName,
            id: action.payload.doc.id,
            email: data.email,
            phoneMobile: data.phoneMobile,
            phoneWork: data.phoneWork
          };
        });
      });
  }

  get allContacts(): Observable<Contact[]> {
    return this.contacts;
  }

  createContact(contact: Contact) {
    this.contactsCollectionRef.add(contact);
  }
}
