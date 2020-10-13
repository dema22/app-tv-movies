import { Injectable } from '@angular/core';

// Communicating with backend services using HTTP angular client
import { HttpClient, HttpHeaders} from '@angular/common/http';

// Importing operators from rxjs library 
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Importing types
import { UserTvShows } from '../interfaces/UserTvShows';


@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  
  tvShowsUrl = 'api/userTvShows';
 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  /*
    All HttpClient methods return an RxJS Observable of something. 
    Pipes let you combine multiple functions into a single function.
    After a successful API request, the tap() operator will do any function you want it to perform with the response
    catchError() - catchError does exactly the same thing but with error response. If you want to throw an error or want to call some function if you get an error
  */
 
  /* GET tv shows from the server */
  getAllTvShows(): Observable<UserTvShows[]> {
    return this.http.get<UserTvShows[]>(this.tvShowsUrl).pipe(
      tap((result) => console.log(result)) 
    );
  }

  /* GET tv show by id */
  getTvShow(id: number): Observable<UserTvShows> {
    const url = `${this.tvShowsUrl}/${id}`;

    return  this.http.get<UserTvShows>(url).pipe(
      tap((result) => console.log(result)) 
    );
  }

  /* DELETE one tv show by id*/
  deleteTvShow(id: number): Observable<UserTvShows> {
    const url = `${this.tvShowsUrl}/${id}`;

    return this.http.delete<UserTvShows>(url,this.httpOptions).pipe(
      tap((result) => console.log(result)) 
    );
  }

  /* UPDATE one tv show */

  updateTvShow(updatedTvShow: UserTvShows): Observable<UserTvShows> {
    const url = `${this.tvShowsUrl}/${updatedTvShow.id}`;

    return this.http.put<UserTvShows>(url, updatedTvShow, this.httpOptions).pipe(
      tap((result) => console.log(result)) 
    );
  }

  /** POST: add a new tv show to the server */
  addTvShow(newTvShow: UserTvShows): Observable<UserTvShows> {
    return this.http.post<UserTvShows>(this.tvShowsUrl, newTvShow, this.httpOptions).pipe(
      tap((result) => console.log(result)) 
    );
  }

  constructor(private http: HttpClient) { }
}
