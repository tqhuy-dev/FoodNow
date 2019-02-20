import { Component, OnInit } from '@angular/core';
import { ConstantValue } from 'src/app/shared/constant';
import { FormBuilder , Validators , FormControl , FormGroup} from '@angular/forms';
import { AuthComponent } from 'src/app/shared/auth';
import { AuthStrategy } from 'src/app/shared/interface/IAuth';
import { Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends AuthComponent implements OnInit, AuthStrategy {


  placeholderConfirmPassword: String = ConstantValue.PLACEHOLDER_CONFIRM_PASSWORD;
  labelConfirmPassword: String = ConstantValue.LABEL_CONFIRM_PASSWORD;

  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.pattern('[a-z]*')
  ]);

  lastName = new FormControl('' , [
    Validators.required,
    Validators.minLength(1),
    Validators.pattern('[a-z]*')
  ]);

  registerForm: FormGroup = this.formBuilder.group({
    username: this.username,
    password: this.password,
    firstName: this.firstName,
    lastName: this.lastName
  });

  doAuth() {
    alert('Register');
  }

  backToLogin() {
    this.router.navigate(['']);
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) {
    super();
  }

  ngOnInit() {
  }

}
