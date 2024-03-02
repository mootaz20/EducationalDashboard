import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpRequestService } from 'src/app/services/http-request.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  
  @Output() isClosed : EventEmitter<boolean> = new EventEmitter<boolean>();

  httpServices : HttpRequestService = inject(HttpRequestService);
  onCLose(){
    this.isClosed.emit(true);
  }
 


  onCreate(form: NgForm){
    // console.log(form.value);
    this.httpServices.createCourse(form.value);
    alert('Your Course has been created');
    form.reset();
    this.isClosed.emit(true);
    location.reload();
  }
}
