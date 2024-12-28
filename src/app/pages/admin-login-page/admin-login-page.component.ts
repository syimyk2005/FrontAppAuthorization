import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {AdminAuthService} from '../../services/admin-auth.service';

@Component({
  selector: 'app-admin-login-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './admin-login-page.component.html',
  standalone: true,
  styleUrl: './admin-login-page.component.scss'
})
export class AdminLoginPageComponent {
  authService = inject(AdminAuthService)
  router =  inject(Router)

  form = new FormGroup({
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)
  })


  async onsubmit(event: Event) {
    if (this.form.valid)
      //@ts-ignore
      this.authService.login(this.form.value)
        .subscribe(res => {
          this.router.navigate(['/admin-register'])
          console.log(res)
        })
  }
}
