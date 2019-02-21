import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillSideComponent } from './bill-side.component';

describe('BillSideComponent', () => {
  let component: BillSideComponent;
  let fixture: ComponentFixture<BillSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
