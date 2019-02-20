import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPaigeComponent } from './component/product-paige/product-paige.component';

const routes: Routes = [
    {
        path: '',
        component: ProductPaigeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class ProductRoutingModule { }
