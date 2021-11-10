import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableAccordionComponent } from './table-accordion/table-accordion.component';
import { TableOneComponent } from './table-one/table-one.component';
import { TableTwoComponent } from './table-two/table-two.component';

const routes: Routes = [
  {
    path:'table-one',
    component:TableOneComponent
  },
  {
    path:'table-two',
    component:TableTwoComponent
  },
  {
    path:'table-accordion',
    component:TableAccordionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
