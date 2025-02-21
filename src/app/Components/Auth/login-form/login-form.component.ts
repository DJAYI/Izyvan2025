import { Component, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SyncService } from '../../../Services/Auth/sync.service';
import { Router } from '@angular/router';
import { SessionService } from '../../../Services/Auth/session.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  router: Router = Inject(Router);
  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  loginGroup = new FormGroup({
    username: this.username,
    password: this.password,
  });

  constructor(
    protected syncService: SyncService,
    protected session: SessionService
  ) {
    this.username.setValidators([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z0-9]*$'),
    ]);
    this.password.setValidators([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.pattern('^[a-zA-Z0-9]*$'),
    ]);
  }

  protected onSubmit(): void {
    const { username, password } = this.loginGroup.value;
    const credentials = { username, password };

    if (this.loginGroup.valid) {
      this.syncService.syncSession(credentials).subscribe({
        next: (response: any) => {
          if (response.status === 401) {
            console.log('Login failed');
          }

          if (response.status === 403) {
            console.log('Forbidden');
          }

          if (response.status === 404) {
            console.log('Not found');
          }

          if (response.status === 500) {
            console.log('Internal server error');
          }

          console.log(response);
          const { session } = response;
          const { user } = session;
          this.session.setUserSession(user);

          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }
}
