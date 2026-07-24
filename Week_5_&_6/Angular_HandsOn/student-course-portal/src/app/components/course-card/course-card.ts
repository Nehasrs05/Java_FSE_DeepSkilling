import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';
import { EnrollmentService } from '../../services/enrollment';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    CreditLabelPipe,
    HighlightDirective
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent {

  constructor(
    private enrollmentService: EnrollmentService,
    private router: Router
  ) {}

  @Input()
  course!: Course;

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  goToDetails() {
    this.router.navigate(['courses', this.course.id]);
  }

  enroll() {

    if (this.enrollmentService.isEnrolled(this.course.id)) {
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.enrollmentService.enroll(this.course.id);
    }

    this.enrollRequested.emit(this.course.id);
  }

  isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled(),
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

}