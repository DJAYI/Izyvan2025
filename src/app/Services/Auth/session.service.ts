import { Inject, Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private router: Router = Inject(Router);
  public sessionStatus: boolean = false;
  public sessionRole = '';

  constructor() {}

  public setUserSession(user: User): void {
    if (user) {
      this.sessionStatus = true;
      this.sessionRole = user.role;
      this.router.navigate(['/dashboard']);
    }
  }
}
