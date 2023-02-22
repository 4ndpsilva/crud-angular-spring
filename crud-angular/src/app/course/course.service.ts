import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, tap, delay } from 'rxjs';

import { Course } from './model/course';

@Injectable()
export class CourseService {
  private readonly apiURL = "http://localhost:3000/courses"

  constructor(private http: HttpClient){}

  getAll(){
    return this.http.get<Course[]>(this.apiURL)
      .pipe(
        first(),
        delay(3000),
        tap(data => console.log(data))
      );
  }
}