import { NgModule } from '@angular/core';
import { CartLayoutComponent } from './component/cart-layout/cart-layout.component';
import { ShareModule } from 'src/app/shared/share.module';
import { CartRoutingModule } from './cart.routing';
import { ItemCartComponent } from '../Cart/component/item-cart/item-cart.component';


@NgModule({
    imports: [
        ShareModule,
        CartRoutingModule
    ],
    exports: [],
    declarations: [CartLayoutComponent, ItemCartComponent],
    providers: [],
})
export class CartModule { }
