import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/product/product';
import { ProductService } from 'src/app/core/product/product.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { NewProductModalPage } from './new-product-modal/new-product-modal.page';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  products: Observable<Product>;

  constructor(
    private productService: ProductService,
    public modalController: ModalController) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  async showNewProductModal() {
    const modal = await this.modalController.create({
      component: NewProductModalPage
    });

    return await modal.present();
  }
  


}
