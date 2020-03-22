import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProductModalPage } from './new-product-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NewProductModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProductModalPageRoutingModule {}
