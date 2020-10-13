import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddTvShowComponent } from './dialog-add-tv-show.component';

describe('DialogAddTvShowComponent', () => {
  let component: DialogAddTvShowComponent;
  let fixture: ComponentFixture<DialogAddTvShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddTvShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
