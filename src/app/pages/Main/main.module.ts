import { NgModule } from '@angular/core';
import { LayoutComponent } from './component/layout/layout.component';
import { ShareModule } from 'src/app/shared/share.module';
import { MainRoutingModule } from './main.routing';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
@NgModule({
    imports: [
        ShareModule,
        MainRoutingModule,
    ],
    exports: [],
    declarations: [
        LayoutComponent,
        MenuBarComponent,
    ],
    providers: [],
})
export class MainModule { }
