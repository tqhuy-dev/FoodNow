import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLocationComponent } from './menu-location.component';

describe('MenuLocationComponent', () => {
  let component: MenuLocationComponent;
  let fixture: ComponentFixture<MenuLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
