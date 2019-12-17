import { TestBed } from '@angular/core/testing';

import {EditPerfilService} from './editprofile.service';

describe('EditprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditPerfilService = TestBed.get(EditPerfilService);
    expect(service).toBeTruthy();
  });
});
