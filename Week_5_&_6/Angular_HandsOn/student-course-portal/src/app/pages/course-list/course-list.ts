import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  errorMessage = '';
  selectedCourseId = 0;
  searchTerm = '';

  courses: Course[] = [];
  filteredCourses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.courseService.getCourses().subscribe({

      next: (courses) => {

        this.courses = courses;
        this.filteredCourses = courses;
        this.isLoading = false;

      },

      error: (err) => {

        this.errorMessage = err.message;
        this.isLoading = false;

      }

    });

  }

  updateSearch(): void {

    const term = this.searchTerm.toLowerCase().trim();

    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(term) ||
      course.code.toLowerCase().includes(term)
    );

  }

  onEnroll(courseId: number): void {

    this.selectedCourseId = courseId;

  }

  trackByCourseId(index: number, course: Course): number {

    return course.id;

  }

}