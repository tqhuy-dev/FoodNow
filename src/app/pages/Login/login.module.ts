import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login-form/login.component';
import { LoginRoutingModule } from './login.routing';
import { ShareModule } from 'src/app/shared/share.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        LoginRoutingModule,
        ShareModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }
