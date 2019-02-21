import { NgModule } from '@angular/core';
import { InformationLayoutComponent } from './component/information-layout/information-layout.component';
import { ShareModule } from 'src/app/shared/share.module';
import { InformationRoutingModule } from './information.routing';


@NgModule({
    imports: [
        ShareModule,
        InformationRoutingModule
    ],
    exports: [],
    declarations: [InformationLayoutComponent],
    providers: [],
})
export class InformationModule { }
