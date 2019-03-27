import { TestBed } from '@angular/core/testing';

import { GetListOfSubjectsService } from './get-list-of-subjects.service';

describe('GetListOfSubjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetListOfSubjectsService = TestBed.get(GetListOfSubjectsService);
    expect(service).toBeTruthy();
  });
});
