import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products = [
    {
      id: 1,
      name: 'egg',
      category: 'Food',
      description: 'Lorem egg',
      price: '1',
    },
    {
      id: 2,
      name: 'Coca cola',
      category: 'Drink',
      description: 'Lorem drink',
      price: '1',
    },
    {
      id: 3,
      name: 'Biscoff Cookies',
      category: 'Drink',
      description: 'Lorem cookies',
      price: '1',
    },

  ];

  getAllProducts(){
    return this.products;
  }
  getProductById(id){
    // tslint:disable-next-line: triple-equals
    return this.products.filter((product) => product.id == id );
  }

}
