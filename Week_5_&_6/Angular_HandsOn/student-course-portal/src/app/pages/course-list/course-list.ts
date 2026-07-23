import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { CourseCardComponent } from '../../components/course-card/course-card';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  isLoading = true;

  selectedCourseId = 0;

  searchTerm = '';

  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.courses = this.courseService.getCourses();

    this.searchTerm =
      this.route.snapshot.queryParamMap.get('search') || '';

    this.isLoading = false;

  }

  updateSearch() {

    this.router.navigate(
      ['courses'],
      {
        queryParams: {
          search: this.searchTerm
        }
      }
    );

  }

  onEnroll(courseId: number) {

    console.log("Enrolling in course: " + courseId);

    this.selectedCourseId = courseId;

  }

  trackByCourseId(index: number, course: Course) {

    return course.id;

  }

}