import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  Url = `https://jsonplaceholder.typicode.com/todos`

  getUrl(){
    return this.http.get<TodoListComponent>(this.Url)
  }
}
