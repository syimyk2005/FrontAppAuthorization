import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {TokenResponse} from '../model/auth.model';
import {CookieService} from 'ngx-cookie-service';
import {FormControl, ɵFormGroupValue, ɵTypedOrUntyped} from '@angular/forms';
import {jwtDecode} from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http: HttpClient = inject(HttpClient)
  private baseUrl = 'http://localhost:8080/auth';
  cookieService = inject(CookieService)
  token: string | null = null;



  get isAuth(): boolean {
    if (!this.token) {
      this.token = this.cookieService.get('token');
    }

    if (this.token) {
      try {
        const decodedToken: any = jwtDecode(this.token);
        const now = Math.floor(Date.now() / 1000);
        if (decodedToken.exp && decodedToken.exp < now) {
          return false;
        }
        return true;
      } catch (error) {
        return false;
      }
    }

    return false;
  }

  login(payload: { username: string; password: string }) {
    return this.http.post<TokenResponse>(
      `${this.baseUrl}/authenticate`,
      payload
    ).pipe(
      tap(val => {
        this.token = val.token;
        this.cookieService.set('token', this.token)
      })
    );
  }

  register(payload: ɵTypedOrUntyped<{ password: FormControl<null>; username: FormControl<null> }, ɵFormGroupValue<{
    password: FormControl<null>;
    username: FormControl<null>
  }>, any>): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.baseUrl}/register`, payload).pipe(
      tap(val => {
        this.token = val.token;
        this.cookieService.set('token', this.token)
      })
    );
  }

  constructor() {
  }
}
