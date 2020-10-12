import { Injectable } from '@angular/core';

// Communicating with backend services using HTTP angular client
import { HttpClient, HttpHeaders} from '@angular/common/http';

// Importing operators from rxjs library 
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// Importing types
import { FavouriteTvShow } from '../interfaces/favourite-tv-shows';


@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  
  tvShowsUrl = 'api/favouriteTvShows';
 
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
  getAllTvShows(): Observable<FavouriteTvShow[]> {
    return this.http.get<FavouriteTvShow[]>(this.tvShowsUrl).pipe(
      tap((result) => console.log(result)) 
    );
  }

  /* GET tv show by id */
  getTvShow(id: number): Observable<FavouriteTvShow> {
    const url = `${this.tvShowsUrl}/${id}`;

    return  this.http.get<FavouriteTvShow>(url).pipe(
      tap((result) => console.log(result)) 
    );
  }

  /* DELETE one tv show by id*/
  deleteTvShow(id: number): Observable<FavouriteTvShow> {
    const url = `${this.tvShowsUrl}/${id}`;

    return this.http.delete<FavouriteTvShow>(url,this.httpOptions).pipe(
      tap((result) => console.log(result)) 
    );
  }

  /* UPDATE one tv show */

  updateTvShow(updatedTvShow: FavouriteTvShow): Observable<FavouriteTvShow> {
    const url = `${this.tvShowsUrl}/${updatedTvShow.id}`;

    return this.http.put<FavouriteTvShow>(url, updatedTvShow, this.httpOptions).pipe(
      tap((result) => console.log(result)) 
    );
  }

  /** POST: add a new tv show to the server */
  addTvShow(newTvShow: FavouriteTvShow): Observable<FavouriteTvShow> {
    return this.http.post<FavouriteTvShow>(this.tvShowsUrl, newTvShow, this.httpOptions).pipe(
      tap((result) => console.log(result)) 
    );
  }

  constructor(private http: HttpClient) { }
}
