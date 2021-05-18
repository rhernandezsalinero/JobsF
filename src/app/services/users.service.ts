import { Job } from './../models/jobs.model';
import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }


  login(login: User): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/login`, login)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  singup(register: User): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/signup`, register)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  apply(job: Job): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/user/jobs`, job)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  userDetail(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/user`)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  getUserJobs(register: User) {
    /* return this.httpClient.post(`${environment.apiUrl}/signup`, register)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      ); */
  }

}
