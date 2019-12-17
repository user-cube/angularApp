import { TestBed } from '@angular/core/testing';

import { CartPartialService } from './cart-partial.service';

describe('CartPartialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartPartialService = TestBed.get(CartPartialService);
    expect(service).toBeTruthy();
  });
});
