import { NgModule } from '@angular/core';
import { RegisterComponent } from './component/register/register.component';
import { RegisterRoutingModule } from './register.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        RegisterRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [
        RegisterComponent],
    providers: [],
})
export class RegisterModule { }
