import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { GenreWithSamples } from '../../interfaces/GenreWithSamples.interface';
import { MoviesService } from '../../services/movies.service';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { GenreWithSamplesComponent } from './genre-with-samples.component';

describe('GenreWithSamplesComponent', () => {
	let component: GenreWithSamplesComponent;
	let fixture: ComponentFixture<GenreWithSamplesComponent>;
	let id = 28;
	let name = 'Action';
	let genreSamples: GenreWithSamples = {
		page: 1,
		results: [
			{
				adult: false,
				backdrop_path: '/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
				genre_ids: [28, 878, 53],
				id: 766507,
				original_language: 'en',
				original_title: 'Prey',
				overview:
					'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
				popularity: 9839.591,
				poster_path: '/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
				release_date: '2022-08-02',
				title: 'Prey',
				video: false,
				vote_average: 8.1,
				vote_count: 2894,
			},
		],
		total_pages: 1,
		total_results: 1,
	};
	const initialState = {};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GenreWithSamplesComponent, MovieItemComponent],
			imports: [HttpClientTestingModule],
			providers: [
				provideMockStore({ initialState }),
				{
					provide: MoviesService,
					useValue: {
						getGenreSamples: () => of(genreSamples),
					},
				},
			],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GenreWithSamplesComponent);
		component = fixture.componentInstance;
		component.id = id;
		component.name = name;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('title should have same as input name', () => {
		const div = fixture.debugElement.query(By.css('.primary-title'));
		const title = div.nativeElement.textContent;
		expect(title).toEqual(name);
	});

	it('should number of movie item is same as genreSamples length', () => {
		const debugElement = fixture.debugElement;
		const childElements = debugElement.queryAll(By.css('app-movie-item'));
		expect(childElements.length).toEqual(genreSamples.results.length);
	});
});
