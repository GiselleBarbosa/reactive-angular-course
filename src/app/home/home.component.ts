import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../model/course";
import { CoursesStore } from '../services/courses.store';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  beginnerCourses$: Observable<Course[]>;

  advancedCourses$: Observable<Course[]>;

  constructor(private courseStore: CoursesStore) {}

  ngOnInit() {
    this.reloadCourses();
  }

  reloadCourses() {
    this.beginnerCourses$ = this.courseStore.filterByCategory("BEGINNER");

    this.advancedCourses$ = this.courseStore.filterByCategory("ADVANCED");
  }
}
