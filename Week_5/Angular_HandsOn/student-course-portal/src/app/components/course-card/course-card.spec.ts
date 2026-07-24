import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';

import { CourseCardComponent } from './course-card';
import { EnrollmentService } from '../../services/enrollment';

describe('CourseCardComponent', () => {

  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [
        {
          provide: EnrollmentService,
          useValue: {
            enroll: () => {},
            unenroll: () => {},
            isEnrolled: () => false
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: () => {}
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;

    component.course = {
      id: 1,
      name: 'Java',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed'
    };

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should receive input course', () => {

    expect(component.course.name).toBe('Java');

  });

  it('should toggle details', () => {

    component.toggleDetails();

    expect(component.isExpanded).toBe(true);

  });

});