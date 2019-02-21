import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogLayoutComponent } from './component/log-layout/log-layout.component';

const routes: Routes = [
    {
        path: '',
        component: LogLayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class LogRoutingModule { }
