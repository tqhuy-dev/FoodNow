import { NgModule } from '@angular/core';
import { LayoutComponent } from './component/layout/layout.component';
import { ShareModule } from 'src/app/shared/share.module';
import { MainRoutingModule } from './main.routing';
import { MatMenuModule } from '@angular/material';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { MenuCategoriesComponent } from '../Main/component/menu-categories/menu-categories.component';
import { MenuLocationComponent } from '../Main/component/menu-location/menu-location.component';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
    imports: [
        ShareModule,
        MainRoutingModule,
        MatMenuModule,
        MatSelectModule,
    ],
    exports: [],
    declarations: [
        LayoutComponent,
        MenuBarComponent,
        MenuCategoriesComponent,
        MenuLocationComponent],
    providers: [],
})
export class MainModule { }
