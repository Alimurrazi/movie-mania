import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Genre } from '../../interfaces/Genre.interface';
import { MoviesService } from '../../services/movies.service';
import { OverviewComponent } from './overview.component';
import { By } from '@angular/platform-browser';
import { GenreWithSamplesComponent } from '../genre-with-samples/genre-with-samples.component';

describe('OverviewComponent', () => {
	let component: OverviewComponent;
	let fixture: ComponentFixture<OverviewComponent>;
	let genreList: Genre = {
		genres: [
			{ id: 28, name: 'Action' },
			{ id: 12, name: 'Adventure' },
			{ id: 16, name: 'Animation' },
		],
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [OverviewComponent, GenreWithSamplesComponent],
			imports: [HttpClientTestingModule],
			providers: [
				{
					provide: MoviesService,
					useValue: {
						getGenreList: () => of(genreList),
						getGenreSamples: () => of({}),
					},
				},
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(OverviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should number of app-genre-with-samples equal to genres list length', () => {
		const debugElement = fixture.debugElement;
		const childElements = debugElement.queryAll(By.css('app-genre-with-samples'));
		expect(childElements.length).toEqual(genreList.genres.length);
	});

	it('should have genre list from service', () => {
		fixture.detectChanges();
		expect(component.genreList).toEqual(genreList.genres);
	});
});
