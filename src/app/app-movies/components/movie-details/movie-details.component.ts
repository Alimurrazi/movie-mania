import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddToWishListAction } from 'src/app/store/actions/wishlist.action';
import { MovieBasicInfo } from 'src/app/store/models/movieBasicInfo.model';
import { AppState } from 'src/app/store/models/state.model';
import { RecentMovie } from '../../../shared/interfaces/ReacentMovie.interface';
import { Credits } from '../../interfaces/Credits.interface';
import { MovieDetails } from '../../interfaces/MovieDetails.interface';
import { MovieRecommends } from '../../interfaces/MovieRecommends.interface';
import { MoviesService } from '../../services/movies.service';
import { MovieTrailerComponent } from '../movie-trailer/movie-trailer.component';

@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
	movieId: number;
	details: MovieDetails;
	credits: Credits;
	recommends: MovieRecommends[];
	trailerKey = '';
	LOCAL_STORAGE_TITLE = 'recent-movie-storage-xyz';

	constructor(
		private activatedRoute: ActivatedRoute,
		private moviesService: MoviesService,
		private router: Router,
		private readonly store: Store<AppState>,
		public dialog: MatDialog
	) {
		this.router.routeReuseStrategy.shouldReuseRoute = function () {
			return false;
		};
	}

	ngOnInit(): void {
		this.movieId = this.activatedRoute.snapshot.params.movieId;
		this.getMovieDetails();
		this.checkIfVideoExists();
	}

	checkIfMovieExists(id: number, movies: RecentMovie[]): boolean {
		if (movies && movies.length) {
			const index = movies.findIndex((movie) => movie.id === id);
			if (index === -1) {
				return true;
			} else {
				return false;
			}
		}
		return true;
	}

	setMovieInLocalstorage(details: MovieDetails): void {
		let movies: RecentMovie[] = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_TITLE));
		if (!movies) {
			movies = [];
		}
		const movie: RecentMovie = {
			id: details.id,
			poster_path: details.poster_path,
		};
		if (this.checkIfMovieExists(movie.id, movies)) {
			if (movies.length === 5) {
				movies.splice(0, 1);
			}
			movies.push(movie);
			localStorage.setItem(this.LOCAL_STORAGE_TITLE, JSON.stringify(movies));
		}
	}

	getMovieDetails(): void {
		this.moviesService.getMovieDetailsCreditsRecommends(this.movieId).subscribe(
			(res) => {
				this.details = res[0];
				this.credits = res[1];
				this.recommends = res[2].results;
				this.setMovieInLocalstorage(this.details);
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

	checkIfVideoExists(): void {
		this.moviesService.getMovieVideos(this.movieId).subscribe(
			(res) => {
				const videos = res.results;
				const index = videos.findIndex(
					(video) => video.official === true && video.site === 'YouTube' && video.type === 'Trailer'
				);
				if (index !== -1) {
					this.trailerKey = videos[index].key;
				}
			},
			(err) => {
				console.log(err);
			}
		);
	}

	openTrailerDialog(): void {
		this.dialog.open(MovieTrailerComponent, {
			data: {
				key: this.trailerKey,
			},
		});
	}
}
