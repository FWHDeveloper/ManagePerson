import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';

 
interface Person {
  id: number;
    fname: string;
    lname: string;
    emailAddress: string;
}

describe('CrudService', () => {
  let service: CrudService;
 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  // first test crud service with empty person list
  it('should create a crud service with empty person list', () => {
    expect(service.person).toEqual([]);
  });
/** Second test : to list all persons by name 
*/
      describe("METHOD: getAll", () => {
        it("should get peoples", () => {
          expect(CrudService.getAll()).toEqual([]);
        });
      });
});
