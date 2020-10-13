import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Communicating with backend services using HTTP angular client
import { HttpClientModule } from '@angular/common/http';
import { TvShowsReminderComponent } from './tv-shows-reminder/tv-shows-reminder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importing material table and dialgo
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAddTvShowComponent } from './dialog-add-tv-show/dialog-add-tv-show.component';

// Importing form fields, input and button from material
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

// Importing forms from angular
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TvShowsReminderComponent,
    DialogAddTvShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
