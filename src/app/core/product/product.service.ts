import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products;
  private productColletion : AngularFirestoreCollection;

  constructor(private angularFireStore : AngularFirestore) { }

  getProducts(){
    
    this.getDatabaseProducts();

    return this.products;
  }

  private getDatabaseProducts() {
    this.productColletion = this.angularFireStore.collection<Product>('products');

    this.products = this.productColletion
      .snapshotChanges()
      .pipe(
        map(response => {return response
          .map( res => {
            let data = res.payload.doc.data();
            let id = res.payload.doc.id;
            return {id, ...data}
  })}))}

  addProduct(item: Product){
    return this.productColletion.add(item);
  }

}