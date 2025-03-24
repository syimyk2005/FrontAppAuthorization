import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AdminAuthService} from '../../services/admin-auth.service';

@Component({
  selector: 'app-admin-register-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './admin-register-page.component.html',
  standalone: true,
  styleUrls: ['./admin-register-page.component.scss']
})
export class AdminRegisterPageComponent {
  authService = inject(AdminAuthService)
  router =  inject(Router)

  form = new FormGroup({
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)
  })

  async onsubmit(event: Event) {
    if (this.form.valid)
      //@ts-ignore

      this.authService.register(this.form.value)
        .subscribe(res => {
        })

  }
}
