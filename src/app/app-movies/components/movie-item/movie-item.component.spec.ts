import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MovieListItem } from '../../interfaces/GenreWithSamples.interface';
import { MovieItemComponent } from './movie-item.component';

describe('MovieItemComponent', () => {
	let component: MovieItemComponent;
	let fixture: ComponentFixture<MovieItemComponent>;
	let expectedConfig: MovieListItem;
	const initialState = {};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MovieItemComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MovieItemComponent);
		component = fixture.componentInstance;
		expectedConfig = {
			adult: false,
			backdrop_path: '/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg',
			genre_ids: [28, 878, 53],
			id: 766507,
			original_language: 'en',
			original_title: 'Prey',
			overview:
				'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
			popularity: 8674.5,
			poster_path: '/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
			release_date: '2022-08-02',
			title: 'Prey',
			video: false,
			vote_average: 8.1,
			vote_count: 2665,
		};
		component.config = expectedConfig;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
