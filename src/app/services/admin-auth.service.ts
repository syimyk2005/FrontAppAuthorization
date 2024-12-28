import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { TokenResponse } from '../model/auth.model';
import { CookieService } from 'ngx-cookie-service';
import {jwtDecode} from 'jwt-decode';


export interface RegisterPayload {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/admin-auth';
  cookieService = inject(CookieService);
  token: string | null = null;
  private decodedToken: any = null;

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
    if (this.isAuth && this.decodedToken) {
      return this.decodedToken.role === 'ADMIN' || this.decodedToken.roles?.includes('ADMIN');
    }
    return false;
  }





  login(payload: { username: string; password: string }): Observable<TokenResponse | null> {
    return this.http.post<TokenResponse>(`${this.baseUrl}/authenticate`, payload).pipe(
      tap(val => {
        this.token = val.token;
        this.cookieService.set('token', this.token);
      }),
      catchError(error => {
        console.error('Login error', error);
        return of(null);
      })
    );
  }

  register(payload: RegisterPayload): Observable<TokenResponse | null> {
    return this.http.post<TokenResponse>(`${this.baseUrl}/register`, payload).pipe(
      tap(val => {
        this.token = val.token;
        this.cookieService.set('token', this.token);
      }),
      catchError(error => {
        console.error('Register error', error);
        return of(null);
      })
    );
  }

  logout(): void {
    this.token = null;
    this.cookieService.delete('token');
  }

  constructor() {}
}
