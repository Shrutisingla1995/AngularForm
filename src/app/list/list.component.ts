import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private db: PolicyService,) { }
  users:{};
  heads = [ 
    'Company Name',
    'Website',
    'First Name',
    'Last Name',
    'Email',
    'Job Title',
    'Mobile',
    'Business Ownership',
    'Business Structure',];
  ngOnInit() {
     this.getUsers();
    }  
    getUsers() {
      this.db.getList().subscribe(res => {
          this.users = res;
      });
    } 

}
