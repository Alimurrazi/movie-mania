import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMoviesComponent } from './recent-movies.component';

describe('RecentMoviesComponent', () => {
  let component: RecentMoviesComponent;
  let fixture: ComponentFixture<RecentMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
