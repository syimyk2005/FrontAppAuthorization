import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ath-page',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './ath-page.component.html',
  standalone: true,
  styleUrl: './ath-page.component.scss'
})
export class AthPageComponent {
  authService = inject(AuthService)
  router =  inject(Router)

  async onsubmit(event: SubmitEvent) {
    event.preventDefault();
    const button = event.submitter as HTMLButtonElement;
    if (button?.innerText === 'Зарегистрироваться') {
      await this.router.navigate(['/register']);
    } else if (button?.innerText === 'Войти') {
      await this.router.navigate(['/login']);
    }else if (button?.innerText === 'Войти как Админ') {
      await this.router.navigate(['/admin-login']);
    }
  }
}
