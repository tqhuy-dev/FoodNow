import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFoodSideComponent } from './booking-food-side.component';

describe('BookingFoodSideComponent', () => {
  let component: BookingFoodSideComponent;
  let fixture: ComponentFixture<BookingFoodSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFoodSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFoodSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
