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
        c_desc: value.desc,
        c_site: value.website,
        city:value.city,
        state:value.state,
        pfname:value.pfname,
        plname:value.plname,
        pmail:value.pmail,
        pj_title:value.pjob,
        p_ex:value.pex,
        p_fax:value.pfax,
        pmob:value.pmob,
        addr1:value.straddress1,
        addr2:value.straddress2,
        business_own:value.businessOwn,
        business_struc:value.businessStruc
      });
    }
}

