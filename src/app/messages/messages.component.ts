import { Component, OnInit } from "@angular/core";
import { MessagesService } from "./messages.service";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Component({
  selector: "messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"],
})
export class MessagesComponent implements OnInit {
  showMessages = false;

  errors$: Observable<string[]>;

  constructor(public messagesServices: MessagesService) {
    console.log("Created messages component");
  }

  ngOnInit() {
    this.errors$ = this.messagesServices.errors$.pipe(
      tap(() => (this.showMessages = true))
    );
  }

  onClose() {
    this.showMessages = false;
  }
}
