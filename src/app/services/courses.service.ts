import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course, sortCoursesBySeqNo } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  beginnerCourses: Course[];
  advancedCourses: Course[];

  constructor(private http: HttpClient) {
    this.http.get('/api/courses')
      .subscribe(
        res => {

          const courses: Course[] = res["payload"].sort(sortCoursesBySeqNo);

          this.beginnerCourses = courses.filter(course => course.category == "BEGINNER");

          this.advancedCourses = courses.filter(course => course.category == "ADVANCED");

        });

  }
}
