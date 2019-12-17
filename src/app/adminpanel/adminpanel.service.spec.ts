import { TestBed } from '@angular/core/testing';

import { PainelService } from './adminpanel.service';

describe('AdminpanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PainelService = TestBed.get(PainelService);
    expect(service).toBeTruthy();
  });
});
