import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {

  selectedCourseId = 0;

  courses = [

    {id:1,name:"Java",code:"CS101",credits:4},

    {id:2,name:"Python",code:"CS102",credits:3},

    {id:3,name:"Angular",code:"CS103",credits:4},

    {id:4,name:"Spring Boot",code:"CS104",credits:4},

    {id:5,name:"MySQL",code:"CS105",credits:3}

  ];

  onEnroll(courseId:number){

    console.log("Enrolling in course : " + courseId);

    this.selectedCourseId = courseId;

  }

}