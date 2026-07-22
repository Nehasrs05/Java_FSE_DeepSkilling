import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

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

  courses = [
    { id: 1, name: 'Java', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Python', code: 'CS102', credits: 3, gradeStatus: 'failed' },
    { id: 3, name: 'Angular', code: 'CS103', credits: 4, gradeStatus: 'pending' },
    { id: 4, name: 'Spring Boot', code: 'CS104', credits: 4, gradeStatus: 'passed' },
    { id: 5, name: 'MySQL', code: 'CS105', credits: 2, gradeStatus: 'pending' }
  ];

  ngOnInit() {

    setTimeout(() => {

      this.isLoading = false;

    }, 1500);

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