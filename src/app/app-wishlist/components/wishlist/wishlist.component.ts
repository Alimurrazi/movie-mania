import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveFromWishListAction } from 'src/app/store/actions/wishlist.action';
import { MovieBasicInfo } from 'src/app/store/models/movieBasicInfo.model';
import { AppState } from 'src/app/store/models/state.model';

@Component({
	selector: 'app-wishlist',
	templateUrl: './wishlist.component.html',
	styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
	movieList: MovieBasicInfo[] = [];
	constructor(private readonly store: Store<AppState>) {}

	ngOnInit(): void {
		this.store
			.select((store) => store.wishList.movies)
			.subscribe((res) => {
				this.movieList = res;
			});
	}

	removeFromWishList(movie: MovieBasicInfo): void {
		this.store.dispatch(new RemoveFromWishListAction(movie));
	}
}
