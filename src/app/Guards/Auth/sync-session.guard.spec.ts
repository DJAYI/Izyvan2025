import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { syncSessionGuard } from './sync-session.guard';

describe('syncSessionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => syncSessionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
