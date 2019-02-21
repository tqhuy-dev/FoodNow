import { NgModule } from '@angular/core';
import { CartLayoutComponent } from './component/cart-layout/cart-layout.component';
import { ShareModule } from 'src/app/shared/share.module';
import { CartRoutingModule } from './cart.routing';


@NgModule({
    imports: [
        ShareModule,
        CartRoutingModule
    ],
    exports: [],
    declarations: [CartLayoutComponent],
    providers: [],
})
export class CartModule { }
