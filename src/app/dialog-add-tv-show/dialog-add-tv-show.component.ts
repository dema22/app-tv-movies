import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserTvShows } from '../interfaces/UserTvShows';
import { TvShowImpl } from '../models/TvShowImpl';
import { UserTvShowsImpl } from '../models/UserTvShowImpl';

@Component({
  selector: 'app-dialog-add-tv-show',
  templateUrl: './dialog-add-tv-show.component.html',
  styleUrls: ['./dialog-add-tv-show.component.css']
})
export class DialogAddTvShowComponent implements OnInit {

  newTvShow: UserTvShowsImpl = new UserTvShowsImpl(new TvShowImpl(),null,null,false,null);

  constructor(public dialogRef: MatDialogRef<DialogAddTvShowComponent>) { }

  closeDialog() {
    this.dialogRef.close('Close!');
  }

  saveTvShow(){
    //let newTvShow = new UserTvShowsImpl();
    //console.log(newTvShow);

    /*const newTvShow = {
      "tvShow": {
        "name": "Banshee",
        "genre": "action",
        "productionCompany": "HBO"
      },
      "watchingSeason": 1,
      "watchingEpisode": 10,
      "completed": false,
      "rating": 5
    };*/

    console.log(this.newTvShow);

    this.dialogRef.close(this.newTvShow);
  }

  ngOnInit(): void {
  }

}
