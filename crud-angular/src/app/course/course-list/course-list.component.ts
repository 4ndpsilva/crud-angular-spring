import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CourseService } from './../course.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent{
  displayedColumns = ['id', 'name', 'category'];

  courses$: Observable<Course[]>;

  constructor(private service: CourseService){
    this.courses$ = this.service.getAll();
  }
}