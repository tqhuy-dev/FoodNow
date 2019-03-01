import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/ProductServices.services';
import { IFood } from 'src/app/shared/interface/IFood.interface';
import { ConstantValue } from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-booking-food-side',
  templateUrl: './booking-food-side.component.html',
  styleUrls: ['./booking-food-side.component.scss']
})
export class BookingFoodSideComponent implements OnInit {

  @Input() dataFood: IFood = {
    ID: '',
    IDStore: '',
    name: '',
    price: 0,
    trend: 0,
    type: '',
    totalBooking: 0,
    status: 0,
    total: 0
  };
  constructor(
    private productServices: ProductService
  ) { }
  total = 0;
  ngOnInit() {
  }

  increaseTotalFood() {
    this.total += 1;
    this.productServices.addFoodInMenu(this.dataFood);
  }

  decreaseTotalFood() {
    if (this.total === 0) {
      return ;
    }
    this.total -= 1;
    this.productServices.removeFoodInMenu(this.dataFood);
  }
}
