import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import BucklyPreset from './core/theme/buckly.preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: BucklyPreset,
        options: {
          darkModeSeletor: false,
          cssLayer: false,
          prefix: 'p',
        }
      },
      ripple: true,
    }),
  ]
};
