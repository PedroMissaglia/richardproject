import { Component, OnInit, OnChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/product/product.service';
import { Product } from 'src/app/core/product/product';

@Component({
  selector: 'app-new-product-modal',
  templateUrl: './new-product-modal.page.html',
  styleUrls: ['./new-product-modal.page.scss'],
})
export class NewProductModalPage implements OnInit {

  currentModal;
  productForm: FormGroup;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      expirationDate: ['', Validators.required],
      status: [true]
    })

  }

  async dismissModal() {
    await this.modalController.dismiss();
  }

  addProduct(){
    let product: Product = this.productForm.value;
  
    return this.productService.addProduct(product).then(() => this.dismissModal());
  }

}
