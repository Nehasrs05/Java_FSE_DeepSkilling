import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { courseReducer } from './store/course/course.reducer';
import { CourseEffects } from './store/course/course.effects';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
 providers: [

  provideBrowserGlobalErrorListeners(),

  provideRouter(routes),

  provideHttpClient(),

  provideStore({

    course: courseReducer

  }),

  provideEffects([CourseEffects]),

  provideStoreDevtools({

    maxAge: 25

  })

]
};