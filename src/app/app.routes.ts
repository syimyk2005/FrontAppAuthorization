import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { canActivateAuth } from './services/access.guard';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {AthPageComponent} from './pages/ath-page/ath-page.component';
import {AdminLoginPageComponent} from './pages/admin-login-page/admin-login-page.component';
import {AdminRegisterPageComponent} from './pages/admin-register-page/admin-register-page.component';
import {canActivateAdmin} from './services/admin.guard';

export const routes: Routes = [
  {
    path: 'home', component: HomePageComponent,
    canActivate: [canActivateAuth]},
  {
    path: 'register', component: RegisterPageComponent,
  },
  {
    path: '', component: AthPageComponent,
  },
  {
    path: 'login', component: LoginPageComponent,
  },
  {
    path: 'admin-login', component: AdminLoginPageComponent,
  },

  {
    path: 'admin-register', component: AdminRegisterPageComponent,
    canActivate: [canActivateAdmin]
  }
];
