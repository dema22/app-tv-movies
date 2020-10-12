import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsReminderComponent } from './tv-shows-reminder.component';

describe('TvShowsReminderComponent', () => {
  let component: TvShowsReminderComponent;
  let fixture: ComponentFixture<TvShowsReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowsReminderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowsReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
