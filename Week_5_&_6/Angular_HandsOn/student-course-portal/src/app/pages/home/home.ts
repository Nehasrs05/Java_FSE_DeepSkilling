import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CourseService } from '../../services/course';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CourseSummaryWidgetComponent,
    
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  coursesCount = 0;

  totalCourses = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit() {

    this.coursesCount = this.courseService.getCourses().length;

    this.totalCourses = this.coursesCount;

    console.log('HomeComponent initialised — courses loaded');

  }

  ngOnDestroy() {

    console.log('HomeComponent destroyed');

  }

  onEnrollClick() {

    this.message = 'Enrollment opened!';

  }

}