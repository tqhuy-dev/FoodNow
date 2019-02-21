import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationLayoutComponent } from './component/information-layout/information-layout.component';

const routes: Routes = [
    {
        path: '',
        component: InformationLayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class InformationRoutingModule { }
