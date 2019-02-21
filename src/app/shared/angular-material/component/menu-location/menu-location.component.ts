import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-location',
  templateUrl: './menu-location.component.html',
  styleUrls: ['./menu-location.component.scss']
})
export class MenuLocationComponent implements OnInit {

  @Input() placeHolderMenu = '';
  @Input() itemArray = [];
  constructor() { }

  ngOnInit() {
  }

}
