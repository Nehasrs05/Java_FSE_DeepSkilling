import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';
import { EnrollmentService } from '../../services/enrollment';
import { Router } from '@angular/router';

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
goToDetails() {

  this.router.navigate(['courses', this.course.id]);

}

  @Input()
  course!: any;

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  enrolled = false;

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

  // Getter keeps template cleaner than writing the object inline
  get cardClasses() {

    return {

      'card--enrolled': this.enrolled,

      'card--full': this.course.credits >= 4,

      'expanded': this.isExpanded

    };

  }

}