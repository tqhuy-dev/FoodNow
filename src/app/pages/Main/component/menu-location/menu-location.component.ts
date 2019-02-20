import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-location',
  templateUrl: './menu-location.component.html',
  styleUrls: ['./menu-location.component.scss']
})
export class MenuLocationComponent implements OnInit {

  location = ['Phan Xich Long' , 'Nguyen Hue' , 'Ho Ban Nguyet' , 'Thu Duc' , 'Khu Cong Nghe Cao'];
  constructor() { }

  ngOnInit() {
  }

}
