import { Component, OnInit, inject } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    closeForm : boolean = false;
    httpService : HttpRequestService = inject(HttpRequestService);
    courses = [];
    showEdit : boolean = false;
    selectedCourse = [];
    isloader  : boolean = true;

    CloseCreate(){
      this.closeForm = false;
    }
    onAddCLick(){
      this.closeForm = true;
    }
    onEditButton(course){
      this.showEdit=true;
      console.log(course);
      this.selectedCourse = course;
    }
    CloseEdit(){
      this.showEdit = false; 
    }
    ngOnInit(): void {
      this.httpService.getAllCourses().subscribe((data)=>{
        this.courses= data;
        this.isloader=false;
      });
    }
    onDelete(key: string){
      this.httpService.deleteCourse(key).subscribe((res)=>{
        alert('delete  success');
        location.reload();
      });
    }

}
