import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreWithSamplesComponent } from './genre-with-samples.component';

describe('GenreWithSamplesComponent', () => {
  let component: GenreWithSamplesComponent;
  let fixture: ComponentFixture<GenreWithSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreWithSamplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreWithSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
