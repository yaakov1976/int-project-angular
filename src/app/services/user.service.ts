import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public db:AngularFirestore,
    public fbAuth:AngularFireAuth
  ) { }

  getCurrentUser(){
    return new Promise<any>(
      (resolve,reject) =>{
        const user = firebase.auth().onAuthStateChanged( (user) => {
          if(user !=null){
            console.log(user.email);
            localStorage.setItem('name', user.displayName);
            localStorage.setItem('email', user.email);
          }
          user? resolve(user) : resolve(null);
        })

      }
    )
  }
}
