import { TestBed } from '@angular/core/testing';

import { ListOfStudentsService } from './list-of-students.service';

describe('ListOfStudentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListOfStudentsService = TestBed.get(ListOfStudentsService);
    expect(service).toBeTruthy();
  });
});
