import { NgModule } from '@angular/core';
import { LogLayoutComponent } from './component/log-layout/log-layout.component';
import { ShareModule } from 'src/app/shared/share.module';
import { LogRoutingModule } from './log.routing';


@NgModule({
    imports: [
        ShareModule,
        LogRoutingModule
    ],
    exports: [],
    declarations: [LogLayoutComponent],
    providers: [],
})
export class LogModule { }
