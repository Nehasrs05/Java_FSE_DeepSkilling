import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { CourseListComponent } from './pages/course-list/course-list';
import { StudentProfileComponent } from './pages/student-profile/student-profile';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'courses',
    component: CourseListComponent
  },
  {
    path: 'profile',
    component: StudentProfileComponent
  },
  {
    path: 'enroll',
    component: EnrollmentFormComponent
  }
];