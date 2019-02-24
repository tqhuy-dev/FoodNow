import { Component, OnInit, Input } from '@angular/core';
import { IFood } from 'src/app/shared/interface/IFood.interface';

@Component({
  selector: 'app-detail-food',
  templateUrl: './detail-food.component.html',
  styleUrls: ['./detail-food.component.scss']
})
export class DetailFoodComponent implements OnInit {

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
