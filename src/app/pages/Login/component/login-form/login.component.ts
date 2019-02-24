import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthComponent } from 'src/app/shared/parent-component/auth';
import { AuthStrategy } from 'src/app/shared/interface/IAuth';
import { AuthService } from 'src/app/services/AuthServices.services';
import { IBodyLogin } from 'src/app/shared/interface/IBodyLoginAPI.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AuthComponent implements OnInit, AuthStrategy {

  isLoginFail = true;

  loginForm: FormGroup = this.formBuilder.group({
    username: this.username,
    password: this.password
  });

  constructor(
    private authServices: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) {
      super();
     }

  ngOnInit() {

  }

  doAuth() {
    const bodyLogin: IBodyLogin = {
      account: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    this.authServices.login(bodyLogin).then((token: string) => {
      if (token) {
        this.saveSession(token);
      } else {
        this.isLoginFail = false;
      }
    });
  }

  linkToRegister() {
    this.router.navigate(['/register']);
  }

  saveSession(token: string) {
    sessionStorage.setItem('token' , token );
    this.router.navigate(['/main']);
  }

}
