import { Component, Input, OnInit } from '@angular/core';
import { MovieListItem } from '../../interfaces/GenreWithSamples.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
	selector: 'app-genre-with-samples',
	templateUrl: './genre-with-samples.component.html',
	styleUrls: ['./genre-with-samples.component.scss'],
})
export class GenreWithSamplesComponent implements OnInit {
	movieItems: MovieListItem[] = [];
	constructor(private moviesService: MoviesService) {}
	@Input() name: string = '';
	@Input()
	id!: number;
	ngOnInit(): void {
		if (this.id !== null) {
			this.getMovieList();
		}
	}
	getMovieList(): void {
		this.moviesService.getGenreSamples(this.id).subscribe(
			(res) => {
				this.movieItems = res.results.length >= 6 ? res.results.splice(0, 6) : res.results;
			},
			(err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			}
		);
	}
}
