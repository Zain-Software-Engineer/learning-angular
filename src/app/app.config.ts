import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
<<<<<<< HEAD
=======
import { provideClientHydration } from '@angular/platform-browser';
>>>>>>> origin/main

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
<<<<<<< HEAD
    provideRouter(routes)
=======
    provideRouter(routes), provideClientHydration()
>>>>>>> origin/main
  ]
};
