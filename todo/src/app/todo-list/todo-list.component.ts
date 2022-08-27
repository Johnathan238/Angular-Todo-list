import { Component, OnInit, Output } from '@angular/core';
import { PeriodicElement, ELEMENT_DATA } from './todo-interface/data-table';
import { APIService } from '../service/api.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    console.log("🚀 ~ file: todo-list.component.ts ~ line 13 ~ TodoListComponent ~ dataSource", this.dataSource)
    this.apiService.getUrl()
    .subscribe((data) => this.data = {
      
    })
  }

}
