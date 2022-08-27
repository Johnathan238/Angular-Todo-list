import { Component, OnInit, Output } from '@angular/core';
import { tableElement } from './todo-interface/data-table';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  elements: tableElement[] = []

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.apiService.getUrl()
    .subscribe((response: any) => {
    response.results.forEach((results: any) => {
      console.log(results);
      this.elements.push(results)
    })
  })
  }

}
