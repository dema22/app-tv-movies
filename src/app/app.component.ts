import { Component } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app-tv-movies';

  /*//favShows$: Observable<any> = this.http.get('/api/favouriteShows');
  favShows;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  ngOnInit() {
    //this.getAllShows();
    //this.getOneShow();
    //this.deleteOneShow();
    //this.updateOneShow();
    this.addOneShow();
    this.getAllShows();
  }

  getAllShows(): void {
    this.http.get('/api/favouriteShows').subscribe((data) => {
      this.favShows = data;
      console.log(data);
    });
  }

  getOneShow(): void {
    
    this.http.get('/api/favouriteShows/2').subscribe((data) => {
      let tempAarray = [];
      tempAarray.push(data);
      this.favShows = tempAarray;
      console.log(data);
    });
  }

  deleteOneShow(): void {
    this.http.delete('/api/favouriteShows/1').subscribe();
  }

  updateOneShow(): void {
    const updatedShow = {
      "id": 0,
      "movie": {
        "id": 0,
        "name": "El padrino updetiado!!!",
        "genre": "mafia updetiada!!!"
      },
      "watching": 300000,
      "completed": true,
      "rating": 50000000
    };

    this.http.put('/api/favouriteShows/0', updatedShow, this.httpOptions).subscribe();
  }


  addOneShow(): void {
    const newShow = {
      "id": 1,
      "movie": {
        "id": 1,
        "name": "El sexto sentido",
        "genre": "terror"
      },
      "watching": 120,
      "completed": false,
      "rating": 4
    };
    this.http.post('/api/favouriteShows', newShow, this.httpOptions).subscribe((data) => this.favShows.push(data));
  }


  constructor(private http: HttpClient) {}*/
}
