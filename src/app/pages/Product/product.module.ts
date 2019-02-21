import { NgModule } from '@angular/core';
import { ProductPaigeComponent } from './component/product-paige/product-paige.component';
import { ShareModule } from 'src/app/shared/share.module';
import { ProductRoutingModule } from './product.routing';
import { ProductSideComponent } from '../Product/component/product-side/product-side.component';
import { BillSideComponent } from '../Product/component/bill-side/bill-side.component';
import { FormOptionComponent } from '../Product/component/form-option/form-option.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material/component/angular-material.module';
import { ItemFoodComponent } from '../Product/component/item-food/item-food.component';
import { ListFoodComponent } from '../Product/component/list-food/list-food.component';
import { DetailFoodComponent } from '../Product/component/detail-food/detail-food.component';
import { BookingFoodSideComponent } from '../Product/component/booking-food-side/booking-food-side.component';


@NgModule({
    imports: [
        ShareModule,
        ProductRoutingModule,
        AngularMaterialModule
    ],
    exports: [],
    declarations: [ProductPaigeComponent, ProductSideComponent, BillSideComponent, FormOptionComponent, ItemFoodComponent, ListFoodComponent, DetailFoodComponent, BookingFoodSideComponent],
    providers: [],
})
export class ProductModule { }
