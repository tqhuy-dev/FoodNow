import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/PageNotFound/component/page-not-found/page-not-found.component';
import { ShareModule } from './shared/share.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './pages/Main/main.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    ShareModule,
    NoopAnimationsModule,
    MainModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
