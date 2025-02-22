import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../../Services/Auth/session.service';
import { inject } from '@angular/core';

export const SyncSessionGuard: CanActivateFn = (route, state) => {
  const session: SessionService = inject(SessionService);
  const router = new Router();

  const userSession = session.sessionStatus;

  return userSession ? true : router.navigate(['/login']);
};
