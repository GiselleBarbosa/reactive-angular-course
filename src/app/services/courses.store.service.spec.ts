import { TestBed } from "@angular/core/testing";

import { CoursesStoreService } from "./courses.store";

describe("CoursesStore", () => {
  let service: CoursesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesStore);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
