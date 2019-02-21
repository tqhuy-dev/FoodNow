import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartLayoutComponent } from './component/cart-layout/cart-layout.component';

const routes: Routes = [
    {
        path: '',
        component: CartLayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class CartRoutingModule { }
