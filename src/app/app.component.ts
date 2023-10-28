import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/state.model';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	title = 'movie-mania';
	wishlistLength$!: Observable<number>;
	constructor(private readonly store: Store<AppState>) {}
	ngOnInit(): void {
		this.wishlistLength$ = this.store.select((store) => store.wishList.movies.length);
	}
}
