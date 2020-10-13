import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserTvShows } from '../interfaces/UserTvShows';
import { UserTvShowsImpl } from '../models/UserTvShowImpl';

@Component({
  selector: 'app-dialog-add-tv-show',
  templateUrl: './dialog-add-tv-show.component.html',
  styleUrls: ['./dialog-add-tv-show.component.css']
})
export class DialogAddTvShowComponent implements OnInit {

  newTvShow: UserTvShowsImpl = new UserTvShowsImpl();

  constructor(public dialogRef: MatDialogRef<DialogAddTvShowComponent>) { }

  closeDialog() {
    this.dialogRef.close('Close!');
  }

  saveTvShow(){
    let newTvShow = new UserTvShowsImpl();
    console.log(newTvShow);
    this.dialogRef.close('We save the dialog...Passing data!');
  }

  ngOnInit(): void {
  }

}
