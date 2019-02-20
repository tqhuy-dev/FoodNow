import { Component, OnInit } from '@angular/core';
import { ConstantValue } from 'src/app/shared/constant';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  labelUsername: String = ConstantValue.LABEL_USERNAME;
  labelPassword: String = ConstantValue.LABEL_PASSWORD;
  errorMessageUsername: String = ConstantValue.ERROR_INVALID_USERNAME;
  errorMessagePassword: String = ConstantValue.ERROR_INVALID_PASSWORD;
  placeholderUsername: String = ConstantValue.PLACEHOLDER_USERNAME;
  placeholderPassword: String = ConstantValue.PLACEHOLDER_PASSWORD;

  username = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(3),
    Validators.pattern('[a-zA-Z ]*')
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.maxLength(50),
    Validators.minLength(10),
    Validators.pattern('[a-zA-Z0-9]*')
  ]);

  loginForm: FormGroup = this.formBuilder.group({
    username: this.username,
    password: this.password
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
