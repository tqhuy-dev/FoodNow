import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPaigeComponent } from './product-paige.component';

describe('ProductPaigeComponent', () => {
  let component: ProductPaigeComponent;
  let fixture: ComponentFixture<ProductPaigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPaigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPaigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
