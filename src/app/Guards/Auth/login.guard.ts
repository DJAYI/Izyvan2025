import { CanActivateFn, Router } from '@angular/router';

export const LoginGuard: CanActivateFn = (route, state) => {
  const router = new Router();

  const userSession = false;

  if (userSession) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
