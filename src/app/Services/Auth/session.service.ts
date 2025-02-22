import { inject, Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public sessionStatus: boolean = false;
  public sessionRole = '';

  private router = inject(Router);

  constructor() {}

  public setUserSession(user: User): void {
    if (user) {
      this.sessionStatus = true;
      this.sessionRole = user.role;
      this.router.navigate(['/dashboard']);
    }

    if (!user) {
      this.router.navigate(['/login']);
      console.log('Login failed');
    }
  }
}
