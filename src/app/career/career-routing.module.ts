import { RouterModule, Routes } from '@angular/router';

import { CareerPage } from './career.page';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CareerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareerPageRoutingModule {}
