import { Component, OnInit } from '@angular/core';
import { TvShowsService } from '../services/tv-shows.service';

import { FavouriteTvShow } from '../interfaces/favourite-tv-shows';

@Component({
  selector: 'app-tv-shows-reminder',
  templateUrl: './tv-shows-reminder.component.html',
  styleUrls: ['./tv-shows-reminder.component.css']
})
export class TvShowsReminderComponent implements OnInit {

  userTvShows: FavouriteTvShow[] = [];

  constructor(private tvShowService: TvShowsService) { }

  ngOnInit(): void {
    this.getAllShows();
    //this.getOneTvShowById();
    //this.deleteTvShowById();
    //this.updateTvShowById();
    //this.addTvShow();
  }

  getAllShows(): void {
    this.tvShowService.getAllTvShows().subscribe((tvShowsResult) => this.userTvShows = tvShowsResult);
  }

  getOneTvShowById(): void {
    this.tvShowService.getTvShow(0).subscribe((tvShowsResult) => {
      console.log(tvShowsResult);
      this.userTvShows.push(tvShowsResult);
      }
    );
  }

  deleteTvShowById(): void {
    this.tvShowService.deleteTvShow(1).subscribe();
  }

  updateTvShowById(): void {
    const updatedTvShow = {
      "id": 1,
      "tvShow": {
        "id": 1,
        "name": "Westworld UPDETIADO PA",
        "genre": "sci fi",
        "productionCompnay": "HBO"
      },
      "watchingSeason": 300,
      "watchingEpisode": 400,
      "completed": true,
      "rating": 40
    };

    this.tvShowService.updateTvShow(updatedTvShow).subscribe();
  }

  addTvShow(): void {
    const newTvShow = {
      "id": 2,
      "tvShow": {
        "id": 2,
        "name": "Black Mirror",
        "genre": "sci fi",
        "productionCompnay": "BBC"
      },
      "watchingSeason": 1,
      "watchingEpisode": 10,
      "completed": false,
      "rating": 3
    };

    this.tvShowService.addTvShow(newTvShow).subscribe((tvShow) => this.userTvShows.push(tvShow));
  }

}
