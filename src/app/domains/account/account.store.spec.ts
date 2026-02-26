import { TestBed } from '@angular/core/testing';

import { AccountStore } from './account.store';

describe('AccountStore', () => {
  let service: AccountStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
