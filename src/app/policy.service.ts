import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  ref = firebase.firestore().collection('users');

  constructor() { }
    postForm(value){
      return this.ref.add({
        c_name: value.name,
      });
    }
}

