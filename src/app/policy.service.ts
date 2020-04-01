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
        business_struc:value.businessStruc,
        labour_type:value.labourType,
        articles:value.articles,
        certificates:value.certificates,
        evidence:value.evidence
      });
    }
    getList(): Observable<any> {
      return new Observable((observer) => {
         this.ref.get().then((res) => {
           let users = [];
           res.forEach(doc => {
             let data = doc.data();
             users.push({
              c_name: data.c_name,
              c_desc: data.c_desc,
              c_site: data.c_site,
              city:data.city,
              state:data.state,
              pfname:data.pfname,
              plname:data.plname,
              pmail:data.pmail,
              pj_title:data.pj_title,
              p_ex:data.pex,
              p_fax:data.pfax,
              pmob:data.pmob,
              addr1:data.straddress1,
              addr2:data.straddress2,
              business_own:data.business_own,
              business_struc:data.business_struc,
              labour_type:data.labourType,
              articles:data.articles,
              certificates:data.certificates,
              evidence:data.evidence
             })
          });
          observer.next(users);
        });
      });
    }
      
  }
    


