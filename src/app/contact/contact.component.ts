import { Component, OnInit, inject } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isloader  : boolean = true;
  httpRequest : HttpRequestService = inject(HttpRequestService);
  messages = [];
  ngOnInit(): void {
    this.httpRequest.getAllContactMessage().subscribe((response) =>{
        this.isloader=false;
        this.messages = response;
        console.log(this.messages);
    });
  }

}
