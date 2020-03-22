import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewProductModalPageRoutingModule } from './new-product-modal-routing.module';

import { NewProductModalPage } from './new-product-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewProductModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NewProductModalPage]
})
export class NewProductModalPageModule {}
