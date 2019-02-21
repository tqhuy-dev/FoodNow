import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthComponent } from 'src/app/shared/parent-component/auth';
import { AuthStrategy } from 'src/app/shared/interface/IAuth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AuthComponent implements OnInit, AuthStrategy {


  loginForm: FormGroup = this.formBuilder.group({
    username: this.username,
    password: this.password
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router) {
      super();
     }

  ngOnInit() {
  }

  doAuth() {
    sessionStorage.setItem('token', '123456789');
    // alert('login');
    this.router.navigate(['/main']);
  }

  linkToRegister() {
    this.router.navigate(['/register']);
  }

}
