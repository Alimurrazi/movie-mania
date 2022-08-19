import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieBasicInfo } from 'src/app/store/models/movieBasicInfo.model';
import { AppState } from 'src/app/store/models/state.model';
import { AddToWishListAction } from '../../../store/actions/wishlist.action';
import { MovieListItem } from '../../interfaces/GenreWithSamples.interface';

@Component({
	selector: 'app-movie-item',
	templateUrl: './movie-item.component.html',
	styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
	@Input() config: MovieListItem;
	wishListItems$: Observable<MovieBasicInfo[]>;
	itemsLength$;
	imgSrc = '';
	constructor(private readonly store: Store<AppState>) {}

	ngOnInit(): void {
		this.wishListItems$ = this.store.select((store) => store.wishList.movies);
		this.itemsLength$ = this.store.select((store) => store.wishList.movies.length);
		this.imgSrc = `https://image.tmdb.org/t/p/w220_and_h330_face/${this.config.poster_path}`;
	}

	showPlaceholderImg(): void {
		this.imgSrc = 'assets/default_poster.jpg';
	}

	addToWishList(): void {
		const wishlistState: MovieBasicInfo = {
			id: this.config.id,
			title: this.config.title,
			poster_path: this.config.poster_path,
			overview: this.config.overview,
		};
		this.store.dispatch(new AddToWishListAction(wishlistState));
	}
}
