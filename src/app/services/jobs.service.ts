import { Job } from './../models/jobs.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

constructor(private httpClient: HttpClient) { }

getJobs(search: string, type: string, location: string): Observable<any> {
  const params = { search: search, type: type, location: location }
  return this.httpClient.get(`${environment.apiUrl}/jobs`, { params: params })
    .pipe(
      catchError(error => {
        return error;
      })
    );
}

getJob(id: string): Observable<any> {
  return this.httpClient.get(`${environment.apiUrl}/job/${id}`).pipe(
    catchError(error => {
      return error;
    })
  );
}

saveJob(job: Job): Observable<any> {
  return this.httpClient.post(`${environment.apiUrl}/job`, job).pipe(
    catchError(error => {
      return error;
    })
  );
}

updateJob(job: Job): Observable<any> {
  return this.httpClient.put(`${environment.apiUrl}/Job/${job._id}`, job).pipe(
    catchError(error => {
      return error;
    })
  );
}

deleteJob(id: string): Observable<any> {
  return this.httpClient.delete(`${environment.apiUrl}/Job/${id}`).pipe(
    catchError(error => {
      return error;
    })
  );
}
}
