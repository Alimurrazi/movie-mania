import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieDetailsComponent } from './movie-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('MovieDetailsComponent', () => {
	let component: MovieDetailsComponent;
	let fixture: ComponentFixture<MovieDetailsComponent>;
	const initialState = {};
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MovieDetailsComponent],
			imports: [RouterTestingModule, HttpClientTestingModule, MatDialogModule],
			providers: [
				provideMockStore({ initialState }),
				// { provide: MAT_DIALOG_DATA, useValue: {} },
				// { provide: MatDialogRef, useValue: {} },
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MovieDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
