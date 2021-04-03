import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Person } from '../Model/Person';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class CrudService {

 
  private URL = "http://localhost:3000/persons";
  
  constructor(private http: HttpClient) { }

/**
 * List all persons 
 * @returns  all persons
 */
    getPersons(){
    return this.http.get<Person[]>(this.URL);
  }
   getPersonId(id:number){
    return this.http.get<Person>(this.URL + "/" + id);
  }
    updatePerson(person:Person){
    return this.http.put<Person>(this.URL + "/" + person.id, person);
  }
    deletePerson(person:Person){
    return this.http.delete<Person>(this.URL + "/" + person.id);
  }

  /**
   * Show details for a person
   * @param id 
   * @returns person's details [id, first name, last name, email address]
   */
//   getById(id:number): Observable<Person> {
//     return this.http.get<Person>(this.URL + '/persons/' + id)
//     .pipe(
//       catchError(this.errorHandler)
//     )
//   }

  
//   private errorHandler<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(error);
//       this.log(`${operation} failed: ${error.message}`);
//       return of(result as T);
//     }
// }

  }

  