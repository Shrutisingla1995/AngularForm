import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private db: PolicyService) { }
  fileToUpload: File = null;

  ngOnInit() {
  }
  numberOnly(event){
    return (event.charCode !=8 && event.charCode ==0 || ( event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)));
  }
  checkURL(event){
    var string = event.target.value;
    if (!~string.indexOf("http")) {
      string = "http://" + string;
    }
    event.target.value = string;
    return event;
  }
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    this.db.postForm(form.value).then(
      res => {
        alert('success');
        form = null;
      }
    )
  }
  handleInputFile1(file: FileList, photo){
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      // this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    console.log(photo)
  }
  handleInputFile2(file: FileList, photo){
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      // this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    console.log(photo)
  }
  handleInputFile3(file: FileList, photo){
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      // this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    console.log(photo)
  }


}
