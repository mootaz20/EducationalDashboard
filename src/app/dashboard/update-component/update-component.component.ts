import { Component, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {
  @Output() closeEdit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() course;
  @ViewChild('EditCourse') EditCourse: NgForm;
  httpService : HttpRequestService = inject(HttpRequestService);
  selectedID : string;

  ngOnInit(): void {
    this.selectedID = this.course.id;
    console.log(this.selectedID);
    setTimeout(() => this.EditCourse.setValue(
      {
        title: this.course?.title,
        author: this.course?.author,
        duration: this.course?.duration,
        rating: this.course?.rating,
        price: this.course?.price,
        description: this.course?.description,
      }
    )
      , 0)
  }

  closeEditForm() {
    this.closeEdit.emit(true);
  }

  onSubmit(form: NgForm) {
    const updatedCourse = form.value;
    this.httpService.editCourse(this.selectedID,updatedCourse);
    alert("The Course has been Updated!");
    location.reload();
  }



}
