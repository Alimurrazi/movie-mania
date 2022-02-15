import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Credits } from '../../interfaces/Credits.interface';
import { MovieDetails } from '../../interfaces/MovieDetails.interface';
import { MovieRecommends } from '../../interfaces/MovieRecommends.interface';
import { MoviesService } from '../../services/movies.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/state.model';
import { MovieBasicInfo } from 'src/app/store/models/movieBasicInfo.model';
import { AddToWishListAction } from 'src/app/store/actions/wishlist.action';

@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
	movieId: number;
	details: MovieDetails[];
	credits: Credits[];
	recommends: MovieRecommends[];
	constructor(
		private activatedRoute: ActivatedRoute,
		private moviesService: MoviesService,
		private router: Router,
		private readonly store: Store<AppState>
	) {
		this.router.routeReuseStrategy.shouldReuseRoute = function () {
			return false;
		};
	}

	ngOnInit(): void {
		this.movieId = this.activatedRoute.snapshot.params.movieId;
		this.getMovieDetails();
	}
	getMovieDetails(): void {
		this.moviesService.getMovieDetailsCreditsRecommends(this.movieId).subscribe(
			(res) => {
				this.details = res[0];
				this.credits = res[1];
				this.recommends = res[2].results;
			},
			(err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			}
		);
	}
	addToWishList(movie: MovieDetails): void {
		const wishlistState: MovieBasicInfo = {
			id: movie.id,
			title: movie.title,
			poster_path: movie.poster_path,
			overview: movie.overview,
		};
		this.store.dispatch(new AddToWishListAction(wishlistState));
	}
}
