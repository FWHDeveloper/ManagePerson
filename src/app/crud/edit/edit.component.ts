import { Component, OnInit } from '@angular/core';
  import { Router }      from '@angular/router';
  import { CrudService } from '../Service/crud.service';
  import { Person }      from '../Model/Person';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 person:Person = new Person();
  constructor(private service: CrudService, private router: Router) { }

 ngOnInit() {
    this.Edit();
  }
Edit(){
    let id=localStorage.getItem("id");
    this.service.getPersonId(+id)
    .subscribe(data=>{
      this.person = data;
    })

  }
  Update(person:Person){
    this.service.updatePerson(person)
    .subscribe(data=>{
      this.person = data;
      alert("Successfully updated!");
      this.router.navigate(["list"]);
    })
  }
}
