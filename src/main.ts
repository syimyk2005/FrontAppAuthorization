import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './auth.app/app.config';
import { AppComponent } from './auth.app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
