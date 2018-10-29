import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  getAut() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    return this.afAuth.auth.signOut();

  }

}