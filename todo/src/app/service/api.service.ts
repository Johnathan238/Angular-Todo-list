import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tableElement } from '../todo-list/todo-interface/data-table';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  Url = `https://jsonplaceholder.typicode.com/todos`

  getUrl(): Observable<tableElement>{
    return this.http.get<tableElement>(this.Url)
  }
}
