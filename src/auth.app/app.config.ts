
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { authInterceptor } from './services/auth.interceptor';
import { IncidentService } from '../incident.app/services/incident.service'; // Проверьте путь!

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptors([authInterceptor])), // Добавляем интерсептор
    provideRouter(routes),
    IncidentService,
  ],
};
