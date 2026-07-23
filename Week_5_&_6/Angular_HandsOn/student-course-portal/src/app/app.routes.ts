import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { HomeComponent } from './pages/home/home';
import { CourseListComponent } from './pages/course-list/course-list';
import { CourseDetailComponent } from './pages/course-detail/course-detail';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout';
import { StudentProfile } from './pages/student-profile/student-profile';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form';
import { NotFoundComponent } from './pages/not-found/not-found';
import { unsavedChangesGuard } from './guards/unsaved-changes-guard';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'courses',
    component: CoursesLayoutComponent,
    children: [
      {
        path: '',
        component: CourseListComponent
      },
      {
        path: ':id',
        component: CourseDetailComponent
      }
    ]
  },

  {
  path: 'profile',
  canActivate: [authGuard],
  component: StudentProfile
},

 {
  path: 'enroll',
  loadComponent: () =>
    import('./pages/enrollment-form/enrollment-form')
      .then(m => m.EnrollmentFormComponent)
},

  {
  path: 'enroll-reactive',
  canDeactivate: [unsavedChangesGuard],
  loadComponent: () =>
    import('./pages/reactive-enrollment-form/reactive-enrollment-form')
      .then(m => m.ReactiveEnrollmentFormComponent)
},

  {
    path: '**',
    component: NotFoundComponent
  }

];