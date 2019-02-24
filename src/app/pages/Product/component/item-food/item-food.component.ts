import { Component, OnInit, Input } from '@angular/core';
import { IFood } from 'src/app/shared/interface/IFood.interface';

@Component({
  selector: 'app-item-food',
  templateUrl: './item-food.component.html',
  styleUrls: ['./item-food.component.scss']
})
export class ItemFoodComponent implements OnInit {

  @Input() dataFood: IFood = {
    ID: '',
    IDStore: '',
    name: '',
    price: 0,
    trend: 0,
    type: '',
    totalBooking: 0,
    status: 0
  };
  constructor() { }

  ngOnInit() {
  }

}
