import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  course ;
  ngOnInit(): void {
    this.course = history.state;
    console.log(this.course);
  }
}
