import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  isLoading = true;

  selectedCourseId = 0;

courses: Course[] = [];
constructor(private courseService: CourseService) {}

ngOnInit() {

  this.courses = this.courseService.getCourses();

  this.isLoading = false;

}
onEnroll(courseId: number) {
    console.log("Enrolling in course: " + courseId);
    this.selectedCourseId = courseId;
  }

  // trackBy prevents Angular from recreating unchanged DOM elements
  trackByCourseId(index: number, course: any) {
    return course.id;
  }

}