import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrimedataService {

  constructor( private http: HttpClient) {

    //     const endpoint = 'http://localhost:8080/crimedata/219016982';
    //     const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json'
    //   })
    // };
    
    
      }

  public getNews() {
    //   const httpOptions = {
    //    headers : new Headers({
    //  'Access-Control-Allow-Headers': 'Content-Type',
    //  'Access-Control-Allow-Methods': 'GET',
    //   'Access-Control-Allow-Origin': '*'
    //   })};
    const headers =  new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .append('origin' , 'http://localhost:4200') ;
  
  
    return this.http.get(`http://localhost:8080/crimedata/219016982`, {headers} );
    }
}
