import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-option',
  templateUrl: './form-option.component.html',
  styleUrls: ['./form-option.component.scss']
})
export class FormOptionComponent implements OnInit {

  placeHolderMenuLocation = 'Location';
  locationArrayLocation = ['Phan Xich Long' , 'Nguyen Hue' , 'Ho Ban Nguyet' , 'Thu Duc' , 'Khu Cong Nghe Cao'];

  placeHolderMenuFood = 'Favorite Food';
  locationArrayFood = ['Cake' , 'Rice' , 'Noodle' , 'Tea' , 'Fruit' , 'FastFood'];
  constructor() { }

  ngOnInit() {
  }

}
