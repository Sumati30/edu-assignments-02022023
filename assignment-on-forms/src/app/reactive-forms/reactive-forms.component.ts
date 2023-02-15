import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  userForm: FormGroup;
  userData: any;

  constructor() {
    this.userForm = new FormGroup({
      fullName : new FormControl(''),
      email : new FormControl(''),
      address : new FormControl(''),
      city : new FormControl(''),
      phoneNum : new FormControl(''),
      password : new FormControl(''),
      confPassword : new FormControl('')
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userData = this.userForm.value ;
    console.log(this.userData.fullName)
  }

  
}
