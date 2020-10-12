import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Communicating with backend services using HTTP angular client
import { HttpClientModule } from '@angular/common/http';
import { TvShowsReminderComponent } from './tv-shows-reminder/tv-shows-reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowsReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
