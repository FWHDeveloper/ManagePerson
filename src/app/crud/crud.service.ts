import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Person } from './person';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators'; 
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  [x: string]: any;
 
  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

/**
 * List all persons 
 * @returns  all persons
 */
    getAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.apiServer + '/persons/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  /**
   * Show details for a person
   * @param id 
   * @returns person's details [id, first name, last name, email address]
   */
  getById(id:number): Observable<Person> {
    return this.httpClient.get<Person>(this.apiServer + '/persons/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  
  private errorHandler<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
}

  }

  