import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { CourseService } from './course';

describe('CourseService', () => {

  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {

    httpMock.verify();

  });

  it('should create', () => {

    expect(service).toBeTruthy();

  });

  it('should get courses', () => {

    const mockCourses = [
      {
        id: 1,
        name: 'Java',
        code: 'CS101',
        credits: 4,
        gradeStatus: 'passed'
      },
      {
        id: 2,
        name: 'Angular',
        code: 'CS102',
        credits: 3,
        gradeStatus: 'pending'
      }
    ];

    service.getCourses().subscribe(courses => {

      expect(courses.length).toBe(2);

    });

    const req = httpMock.expectOne('http://localhost:3000/courses');

    expect(req.request.method).toBe('GET');

    req.flush(mockCourses);

  });

});