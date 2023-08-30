import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routeComponent, routeComponentEmployee } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routeComponent,         //from routing.module (c.stu n c.studetail)
    PageNotFoundComponent,  //page 404 not found
    routeComponentEmployee  //from routing.module (c.emp n c.empDetail, empReport)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
