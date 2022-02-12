/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieListItem } from '../../interfaces/GenreWithSamples.interface';
import { MoviesService } from '../../services/movies.service';

interface FilterItem {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-genre-details-page',
	templateUrl: './genre-details-page.component.html',
	styleUrls: ['./genre-details-page.component.scss'],
})
export class GenreDetailsPageComponent implements OnInit {
	genreName: string;
	genreId: number;
	movieItems: MovieListItem[] = [];
	selectedFilter = 'popularity';
	isAscending = false;

	filterItms: FilterItem[] = [
		{
			value: 'popularity',
			viewValue: 'Popularity',
		},
		{
			value: 'vote_average',
			viewValue: 'Rating',
		},
	];

	constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {}

	ngOnInit(): void {
		this.genreId = this.activatedRoute.snapshot.params.genreId;
		this.genreName = this.activatedRoute.snapshot.params.genreName;
		this.getGenreDetails();
	}
	getGenreDetails(): void {
		const order = this.isAscending ? 'asc' : 'desc';
		const filter = `${this.selectedFilter}.${order}`;
		this.moviesService.getGenreSamples(this.genreId, filter).subscribe(
			(res) => {
				this.movieItems = res.results.length >= 10 ? res.results.splice(0, 10) : res.results;
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);
	}
	orderChange(): void {
		this.isAscending = !this.isAscending;
		this.getGenreDetails();
	}
	filterValueChange(value: string): void {
		this.selectedFilter = value;
		this.getGenreDetails();
	}
}
