import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TvShowsService } from '../services/tv-shows.service';

import { UserTvShows } from '../interfaces/UserTvShows';
import { Observable } from 'rxjs';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogAddTvShowComponent } from '../dialog-add-tv-show/dialog-add-tv-show.component';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-tv-shows-reminder',
  templateUrl: './tv-shows-reminder.component.html',
  styleUrls: ['./tv-shows-reminder.component.css']
})
export class TvShowsReminderComponent implements AfterViewInit { //implements OnInit {

  userTvShows: UserTvShows[] = [];
  displayedColumns: string[] = ['tvShowName', 'tvShowGenre', 'productionCompany', 'watchingSeason', 'WatchingEpisode', 'completed', 'personalRating'];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private tvShowService: TvShowsService, public dialog: MatDialog) { }

  /*ngOnInit(): void {
    //this.getAllShows();
    //this.getOneTvShowById();
    //this.deleteTvShowById();
    //this.updateTvShowById();
    //this.addTvShow();
  }*/


  openTvShowDialog(): void {
    let dialogRef = this.dialog.open(DialogAddTvShowComponent,{
      height: '600px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(newTvShow => {
      console.log(newTvShow);
      this.addTvShow(newTvShow);
    });
  }

  ngAfterViewInit(): void{
    this.getAllShows();
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
    this.tvShowService.deleteTvShow(3).subscribe();
  }

  updateTvShowById(): void {
    const updatedTvShow = {
      "id": 1,
      "tvShow": {
        "id": 1,
        "name": "Westworld UPDETIADO PA",
        "genre": "sci fi",
        "productionCompany": "HBO"
      },
      "watchingSeason": 300,
      "watchingEpisode": 400,
      "completed": true,
      "rating": 40
    };

    this.tvShowService.updateTvShow(updatedTvShow).subscribe();
  }

  addTvShow(newTvShow: UserTvShows): void {
    /*const newTvShow = {
      //"id": 3,
      "tvShow": {
        //"id": 3,
        "name": "Banshee",
        "genre": "action",
        "productionCompany": "HBO"
      },
      "watchingSeason": 2,
      "watchingEpisode": 1,
      "completed": false,
      "rating": 5
    };*/

    this.tvShowService.addTvShow(newTvShow)
      .subscribe((tvShow) => {
        this.userTvShows.push(tvShow);
        this.table.renderRows();
      });
  }

}
