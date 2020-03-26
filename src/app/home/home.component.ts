import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PolicyService } from '../policy.service';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private db: PolicyService,private _formBuilder: FormBuilder) { }
//initializing
  fileToUpload: File = null;
  Form: FormGroup;
  labourTypes = [
    {id: 1, name: "Contingent Workforce", checked: false},
    {id: 2, name: "Contract to hire", checked: false},
    {id: 3, name: "Full Time", checked: false},
    {id: 4, name: "State of work- Project", checked: false},
    {id: 5, name: "State of work- Sourcing", checked: false},
    {id: 5, name: "Payroll Management", checked: false},
  ];
  labourTypeDisplay = [];
  selectedArray;
  ngOnInit() {
    this.Form = this._formBuilder.group({
      selected: this._formBuilder.array([])
    });
    this.labourTypeDisplay = this.labourTypes.map(x => Object.assign({}, x));
  }
// number only format 
  numberOnly(event){
    return (event.charCode !=8 && event.charCode ==0 || ( event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)));
  }
// check url starting with http
  checkURL(event){
    var string = event.target.value;
    if (!~string.indexOf("http")) {
      string = "http://" + string;
    }
    event.target.value = string;
    return event;
  }
  // on form submit
  onSubmit(form: NgForm,event) {
    console.log('Your form data : ', form.value);
    event.preventDefault();
    this.db.postForm(form.value).then(
      res => {
        alert('Successful!');
      }
    )
  }
  // on selecting checkboxes- labour type
  onSelect(data: number, isChecked: boolean) {
    this.selectedArray = <FormArray>this.Form.controls.selected;
    if(isChecked) {
      this.selectedArray.push(new FormControl(data));
    } else {
      let index = this.selectedArray.controls.findIndex(x => x.value == data)
      this.selectedArray.removeAt(index);
    }
    // keep sync between labourTypes and labourTypeDisplay
    const item = this.labourTypes.find(item => item.id === data);
    item.checked = isChecked;
   }
   // on search labour type
  search(searchType): void {
    this.labourTypeDisplay = this.labourTypes.filter(function(tag) {
      return tag.name.toLowerCase().indexOf(searchType) >= 0;
    });
  }

}
