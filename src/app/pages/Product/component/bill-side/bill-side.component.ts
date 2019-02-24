import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/ProductServices.services';
import { IBill } from 'src/app/shared/interface/IBill.interface';

@Component({
  selector: 'app-bill-side',
  templateUrl: './bill-side.component.html',
  styleUrls: ['./bill-side.component.scss']
})
export class BillSideComponent implements OnInit {

  bill: IBill = {
    totalMoney: 0,
    createDate: '',
    detail: []
  };
  constructor(
    private productServices: ProductService
  ) { }

  ngOnInit() {
    this.productServices.getBill
      .subscribe((data: IBill) => {
        this.bill = data;
      });
  }

}
