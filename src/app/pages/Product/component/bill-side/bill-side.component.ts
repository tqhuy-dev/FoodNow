import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/ProductServices.services';
import { IBill } from 'src/app/shared/interface/IBill.interface';
import { NgbActiveModal , NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutModalComponent } from '../checkout-modal/checkout-modal.component';

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
    private productServices: ProductService,
    private modalServices: NgbModal
  ) { }

  ngOnInit() {
    this.productServices.getBill
      .subscribe((data: IBill) => {
        this.bill = data;
      });
  }

  checkoutModal() {
    const checkOutValue = this.modalServices.open(CheckoutModalComponent);
    checkOutValue.componentInstance.price = this.bill.totalMoney;
  }
}
