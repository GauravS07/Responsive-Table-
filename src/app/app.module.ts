import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableOneComponent } from './table-one/table-one.component';
import { TableTwoComponent } from './table-two/table-two.component';
import { TableAccordionComponent } from './table-accordion/table-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    TableOneComponent,
    TableTwoComponent,
    TableAccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
