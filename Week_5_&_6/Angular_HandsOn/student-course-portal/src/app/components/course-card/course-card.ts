import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';
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

  @Input()
  course!: any;

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  enrolled = false;

  enroll() {

    this.enrolled = true;

    this.enrollRequested.emit(this.course.id);

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
