import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieTrailerComponent } from './movie-trailer.component';

describe('MovieTrailerComponent', () => {
	let component: MovieTrailerComponent;
	let fixture: ComponentFixture<MovieTrailerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MovieTrailerComponent],
			imports: [MatDialogModule],
			providers: [
				{ provide: MAT_DIALOG_DATA, useValue: {} },
				{ provide: MatDialogRef, useValue: {} },
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MovieTrailerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
