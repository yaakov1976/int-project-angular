import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fbAuth:AngularFireAuth) { }

  googleLogin() 
  {
    return new Promise<any>((resolve,reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.fbAuth.auth.signInWithPopup(provider).then(
        data =>{
          resolve(data)
          console.log
        },
        err => {
          reject(err)
        }
      )
    })
  }

  googleLogoout(){
    return new Promise(
      (resolve,reject) => {
        if(firebase.auth().currentUser){
          this.fbAuth.auth.signOut();
          resolve(true);
        }
        else{
          reject('user not found');
        }
      }
    )
  }
}
