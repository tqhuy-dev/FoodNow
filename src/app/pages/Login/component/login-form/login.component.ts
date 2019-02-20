import { Component, OnInit } from '@angular/core';
import { ConstantValue } from 'src/app/shared/constant';

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
  constructor() { }

  ngOnInit() {
  }

}
