import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'product',
                pathMatch: 'full'
            },
            {
                path: 'product',
                loadChildren: '../../pages/Product/product.module#ProductModule'
            },
            {
                path: 'cart',
                loadChildren: '../../pages/Cart/cart.module#CartModule'
            },
            {
                path: 'information',
                loadChildren: '../../pages/Information/information.module#InformationModule'
            },
            {
                path: 'log',
                loadChildren: '../../pages/Log/log.module#LogModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class MainRoutingModule { }
