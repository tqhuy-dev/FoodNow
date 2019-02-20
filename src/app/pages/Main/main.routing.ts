import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class MainRoutingModule { }
