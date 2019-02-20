import { NgModule } from '@angular/core';
import { ProductPaigeComponent } from './component/product-paige/product-paige.component';
import { ShareModule } from 'src/app/shared/share.module';
import { ProductRoutingModule } from './product.routing';


@NgModule({
    imports: [
        ShareModule,
        ProductRoutingModule
    ],
    exports: [],
    declarations: [ProductPaigeComponent],
    providers: [],
})
export class ProductModule { }
