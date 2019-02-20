import { NgModule } from '@angular/core';
import { LayoutComponent } from './component/layout/layout.component';
import { ShareModule } from 'src/app/shared/share.module';
import { MainRoutingModule } from './main.routing';


@NgModule({
    imports: [
        ShareModule,
        MainRoutingModule
    ],
    exports: [],
    declarations: [LayoutComponent],
    providers: [],
})
export class MainModule { }
