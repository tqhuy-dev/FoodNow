import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogLayoutComponent } from './log-layout.component';

describe('LogLayoutComponent', () => {
  let component: LogLayoutComponent;
  let fixture: ComponentFixture<LogLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
