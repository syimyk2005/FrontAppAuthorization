import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from './admin-auth.service';

export const canActivateAdmin = () => {
  const router = inject(Router);
  const authService = inject(AdminAuthService);

  if (authService.isAuth){
    return true;
  }
  return router.createUrlTree(['/admin-login']);
};
