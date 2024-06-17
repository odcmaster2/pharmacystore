import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { AuthInterceptor } from './auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi: true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor, multi: true},
    provideRouter(routes),importProvidersFrom(HttpClientModule), provideToastr(), provideAnimations()]
};
