import { Component, OnInit } from '@angular/core';
  import { Router }      from '@angular/router';
  import { CrudService } from '../Service/crud.service';
  import { Person }      from '../Model/Person';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

 person:Person = new Person();
  constructor(private service: CrudService, private router: Router) { }

 ngOnInit() {
    this.Details();
  }
Details(){
    let id=localStorage.getItem("id");
    this.service.getPersonId(+id)
    .subscribe(data=>{
      this.person = data;
    })

  }
}
