import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Credentials } from '../../models/auth/Credentials';

@Injectable({
  providedIn: 'root',
})
export class SyncService {
  endpoint = environment.apiUrL + '/sync';

  constructor(public http: HttpClient) {}

  syncSession(credentials: Credentials) {
    return this.http.post(this.endpoint, credentials);
  }
}
