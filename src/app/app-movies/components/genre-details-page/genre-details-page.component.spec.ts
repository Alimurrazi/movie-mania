import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreDetailsPageComponent } from './genre-details-page.component';

describe('GenreDetailsPageComponent', () => {
  let component: GenreDetailsPageComponent;
  let fixture: ComponentFixture<GenreDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
