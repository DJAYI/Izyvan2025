import { Routes } from '@angular/router';
import { SyncSessionGuard } from './Guards/Auth/sync-session.guard';
import { DashboardComponent } from './Layouts/dashboard/dashboard.component';
import { MainComponent } from './Layouts/main/main.component';
import { LoginFormComponent } from './Components/Auth/login-form/login-form.component';
import { AuthComponent } from './Layouts/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    canActivate: [SyncSessionGuard],
    component: DashboardComponent,

    children: [
      {
        path: '',
        component: MainComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'login',
    component: AuthComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: LoginFormComponent,
        pathMatch: 'full',
      },
    ],
  },
];
