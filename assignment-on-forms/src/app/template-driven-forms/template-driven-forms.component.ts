import { Component, OnInit } from '@angular/core';
import { ComparePasswordsDirective } from '../directives/compare-passwords.directive';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  visible: boolean = false;
  fullName = '';
  email = '';
  phoneNum = '';
  password = '';
  confPassword = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.visible = true;
  }

}
