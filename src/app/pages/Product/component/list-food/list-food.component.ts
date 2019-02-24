import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/ProductServices.services';
import { IFood } from 'src/app/shared/interface/IFood.interface';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent implements OnInit {

  listFoods: IFood[] = [];
  constructor(
    private productServices: ProductService
  ) { }

  ngOnInit() {
    this.productServices.getListFood.subscribe((data) => {
      this.listFoods = data;
      console.log(this.listFoods);
    });
    this.productServices.getFoodsFromServer('5c6f88c01640e2b8f679294f' , 'all');
  }

}
