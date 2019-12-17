import { TestBed } from '@angular/core/testing';
import {ListaAdminService} from './adminlist.service';

describe('AdminlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaAdminService = TestBed.get(ListaAdminService);
    expect(service).toBeTruthy();
  });
});
