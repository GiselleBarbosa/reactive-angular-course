import { Component, Input, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { CourseDialogComponent } from "../course-dialog/course-dialog.component";
import { Course } from "../model/course";

@Component({
  selector: "courses-card-list",
  templateUrl: "./courses-card-list.component.html",
  styleUrls: ["./courses-card-list.component.scss"],
})
export class CoursesCardListComponent implements OnInit {
  @Input() advancedCourses$: Observable<Course[]>;

  courses: Course[] = [];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  editCourse(course: Course) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "400px";

    dialogConfig.data = course;

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);
  }
}
