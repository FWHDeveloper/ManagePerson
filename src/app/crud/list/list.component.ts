import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Person } from '../person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  persons: Person[] = [];
  constructor(public crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getAll().subscribe((data: Person[])=>{
      console.log(data);
      this.persons = data;
    })  
  }

}
