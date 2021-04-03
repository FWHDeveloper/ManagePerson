  import { Component, OnInit } from '@angular/core';
  import { Router }      from '@angular/router';
  import { CrudService } from '../Service/crud.service';
  import { Person }      from '../Model/Person';

  @Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
  })
    export class ListComponent implements OnInit {
      persons: Person[];

      constructor(private service: CrudService, private router: Router) {};

      ngOnInit() {
        this.service.getPersons()
          .subscribe(data => {
            this.persons = data;
          });
      }
    Edit(person:Person):void{
        localStorage.setItem("id", person.id.toString());
        this.router.navigate(["edit"]);
      }
       Details(person:Person):void{
        localStorage.setItem("id", person.id.toString());
        this.router.navigate(["details"]);
      }
    Delete(person:Person){
        this.service.deletePerson(person)
        .subscribe(data=>{
          this.persons=this.persons.filter(p=>p!==person);
          alert("Registry deleted.");
        })
      }
    }
