import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppRootComponent } from './app/app-root'; // 👈 Import your new shell

bootstrapApplication(AppRootComponent, appConfig) // 👈 Bootstrap the shell here
  .catch((err) => console.error(err));