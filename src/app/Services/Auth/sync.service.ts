import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class SyncService {
  endpoint = environment.apiUrL + '/sync';

  constructor(private http: HttpClient) {}

  syncSession(credentials: Credentials) {
    return this.http.post(this.endpoint, credentials);
  }
}
