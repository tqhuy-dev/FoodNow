import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConstant } from '../shared/constant/api.constant';
import { IBodyLogin } from '../shared/interface/IBodyLoginAPI.interface';
import { IResponse } from '../shared/interface/IResponse.interface';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    login(body: IBodyLogin) {
        return new Promise((resolve, reject) => {
            this.httpClient.post(ApiConstant.BASE_URL + ApiConstant.LOGIN_API, body)
                .subscribe((data: IResponse) => {
                    console.log(data);
                    resolve(data.token);
                });
        });
    }

    signin() {

    }
}
