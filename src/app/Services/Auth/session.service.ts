import { Injectable } from '@angular/core';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  public sessionStatus: boolean = false;
  public sessionRole = '';

  constructor() {}

  public setUserSession(user: User): void {
    if (user) {
      this.sessionStatus = true;
      this.sessionRole = user.role;
    }
  }
}
