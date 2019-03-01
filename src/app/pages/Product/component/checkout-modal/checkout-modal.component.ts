import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CropperSettings, ImageCropperComponent  } from 'ngx-img-cropper';

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss']
})
export class CheckoutModalComponent {

  data: any;
  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;
  cropperSettings: CropperSettings;

  @Input() price = '';
  fileChangeListener($event) {
    const image: any = new Image();
    const file: File = $event.target.files[0];
    const myReader: FileReader = new FileReader();
    const that = this;
    myReader.onloadend = function (loadEvent: any) {
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);

    };

    myReader.readAsDataURL(file);
}
  constructor(
    public activeModal: NgbActiveModal
  ) {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.noFileInput = true;
    this.data = {};
  }
}
