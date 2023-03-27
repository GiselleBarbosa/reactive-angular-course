import { AfterViewInit, Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import * as moment from "moment";
import { Course } from "../model/course";
import { CoursesService } from "../services/courses.service";
import { LoadingService } from "../loading/loading.service";
import { saveCourse } from "../../../server/save-course.route";

@Component({
  selector: "course-dialog",
  templateUrl: "./course-dialog.component.html",
  styleUrls: ["./course-dialog.component.css"],
  providers: [LoadingService],
})
export class CourseDialogComponent implements AfterViewInit {
  form: FormGroup;

  course: Course;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course: Course,
    private coursesService: CoursesService,
    private loadingService: LoadingService
  ) {
    this.course = course;

    this.form = fb.group({
      description: [course.description, Validators.required],
      category: [course.category, Validators.required],
      releasedAt: [moment(), Validators.required],
      longDescription: [course.longDescription, Validators.required],
    });
  }

  ngAfterViewInit() {}

  save() {
    const changes = this.form.value;

    const saveCourse$ = this.coursesService.saveCourses(
      this.course.id,
      changes
    );

    this.loadingService
      .showLoadingUntilCompleted(saveCourse$)
      .subscribe((val) => {
        this.dialogRef.close(val);
      });
  }

  close() {
    this.dialogRef.close();
  }
}
