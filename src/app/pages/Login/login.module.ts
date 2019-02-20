import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login-form/login.component';
import { LoginRoutingModule } from './login.routing';
import { ShareModule } from 'src/app/shared/share.module';


@NgModule({
    imports: [
        LoginRoutingModule,
        ShareModule
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
