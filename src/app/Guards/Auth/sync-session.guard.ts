import { CanActivateFn } from '@angular/router';

export const syncSessionGuard: CanActivateFn = (route, state) => {
  return true;
};
