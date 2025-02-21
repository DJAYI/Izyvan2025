import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { SyncSessionGuard } from './sync-session.guard';

describe('SyncSessionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => SyncSessionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
