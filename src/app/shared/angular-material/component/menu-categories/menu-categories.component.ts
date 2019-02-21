import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/shared/enum/categories.enum';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.scss']
})
export class MenuCategoriesComponent implements OnInit {

  categories = [];
  constructor() { }

  ngOnInit() {
   this.categories =  this.enumToArray(Categories);
  }

  enumToArray(enumTmp) {
    const filterTmp = value => isNaN(Number(value)) === false;
    return Object.keys(enumTmp)
    .filter(filterTmp)
    .map(key => enumTmp[key]);
  }
}
