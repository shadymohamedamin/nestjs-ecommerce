import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

  private products = [];

  getAllProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products.find(product => product.id === id);
  }

  createProduct(product) {
    this.products.push(product);
    return product;
  }

  deleteProduct(id: string) {
    const index = this.products.findIndex(product => product.id === id);
    if (index >= 0) {
      this.products.splice(index, 1);
      return { deleted: true };
    }
    return { deleted: false };
  }
}
