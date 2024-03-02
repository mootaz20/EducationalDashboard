import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
    http : HttpClient = inject(HttpClient);

    createCourse(data : any){
      return this.http.post('https://educational-platform-71670-default-rtdb.firebaseio.com/Course.json',
       data).subscribe(
        {
          next: (res)=>{console.log(res)},
          error: (err)=>{alert(err)},
        }
       )
    }

    getAllCourses(){
      return this.http.get('https://educational-platform-71670-default-rtdb.firebaseio.com/Course.json')
      .pipe(map((res)=>{
        let courses = [];
        for(let key in res) {
          if(res.hasOwnProperty(key)) {
            courses.push({...res[key],id: key});
          }
        }
        return courses;
      }));
    }


    deleteCourse(key: string){
      return this.http.delete('https://educational-platform-71670-default-rtdb.firebaseio.com/Course/'+ key+'.json')
    }

    editCourse(key: string, data){
      return this.http.put('https://educational-platform-71670-default-rtdb.firebaseio.com/Course/'+key+'/.json',data)
      .subscribe({
        next: (res)=>{console.log(res)},
        error: (err)=>{alert(err)},
      });
    }

    getAllContactMessage(){
      return this.http.get('https://educational-platform-71670-default-rtdb.firebaseio.com/Contact.json')
      .pipe(map((res)=>{
        let contact = [];
        for(let key in res){
          if(res.hasOwnProperty(key)){
            contact.push({...res[key],id : key})
          }
        }
        console.log(contact);
        return contact;
      }));
    }
}
