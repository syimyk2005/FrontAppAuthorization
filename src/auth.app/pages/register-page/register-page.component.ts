import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-register-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-page.component.html',
  standalone: true,
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  onsubmit(event: Event) {
    if (this.form.valid) {
      const formData = this.form.value;
      this.authService.register(formData).subscribe(
        (res) => {
          this.router.navigate(['/home']);
        },
        (err) => {

          console.error('Registration error:', err);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
