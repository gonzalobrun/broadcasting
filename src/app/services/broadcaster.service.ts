import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BroadcasterService {

  constructor(private http: HttpClient) { }

  broadcast(data: any): Observable<any> {
    const url = 'https://apibroadcasting.herokuapp.com/sms';
    const params = new HttpParams()
      .set('to_phone_number', '5493471530073')
      .set('msg', data.message);
    return this.http.post<any>(url, params)
    .pipe(
      map(res => console.log(res)),
      catchError(err => this.handleError(err))
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
