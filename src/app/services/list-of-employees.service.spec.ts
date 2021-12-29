import { TestBed } from '@angular/core/testing';

import { ListOfEmployeesService } from './list-of-employees.service';

describe('ListOfEmployeesService', () => {
  let service: ListOfEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
