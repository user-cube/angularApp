import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPartialComponent } from './cart-partial.component';

describe('CartPartialComponent', () => {
  let component: CartPartialComponent;
  let fixture: ComponentFixture<CartPartialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPartialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPartialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
