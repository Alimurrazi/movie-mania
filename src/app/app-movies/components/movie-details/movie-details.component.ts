/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
	movieId: number;
	constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) {}

	ngOnInit(): void {
		this.movieId = this.activatedRoute.snapshot.params.movieId;
		this.getMovieDetails();
	}
	getMovieDetails(): void {
		this.moviesService.getMovieDetailsCreditsRecommends(this.movieId).subscribe(
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
