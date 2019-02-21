import { NgModule } from '@angular/core';
import { MenuCategoriesComponent } from './menu-categories/menu-categories.component';
import { MenuLocationComponent } from './menu-location/menu-location.component';
import { MatMenuModule , MatSelectModule} from '@angular/material';
import { ShareModule } from '../../share.module';

@NgModule({
    imports: [
        MatMenuModule,
        MatSelectModule,
        ShareModule
    ],
    exports: [
        MenuCategoriesComponent,
        MenuLocationComponent
    ],
    declarations: [
        MenuCategoriesComponent,
        MenuLocationComponent
    ],
    providers: [],
})
export class AngularMaterialModule { }
