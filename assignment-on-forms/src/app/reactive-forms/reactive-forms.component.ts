import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../directives/mismatch-validator'

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  userForm: FormGroup;
  userData: any;

  constructor( private fb:FormBuilder) {
    
   }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      address : ['', Validators.required],
      city : ['', Validators.required],
      phoneNum : ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12), Validators.pattern("^[0-9]*$")]],
      password : ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword : ['', Validators.required]
    },
    {
      validator : ConfirmPasswordValidator.MatchPassword
    }
    )
  }
  
  get fullName() { return this.userForm.get('fullName'); }
  get email(){return this.userForm.get('email');}
  get address() { return this.userForm.get('address'); }
  get city() { return this.userForm.get('city'); }
  get phoneNum() { return this.userForm.get('phoneNum'); }
  get password() { return this.userForm.get('password'); }
  get confirmPassword() { return this.userForm.get('confirmPassword'); }


  onSubmit(){
    this.userData = this.userForm.value ;
    console.log(this.userData)
  }

  keyPress(event){
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
