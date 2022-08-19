import { Component, OnInit } from '@angular/core';
import { RecentMovie } from '../../interfaces/ReacentMovie.interface';

@Component({
	selector: 'app-recent-movies',
	templateUrl: './recent-movies.component.html',
	styleUrls: ['./recent-movies.component.css'],
})
export class RecentMoviesComponent implements OnInit {
	movies: RecentMovie[] = [];
	LOCAL_STORAGE_TITLE = 'recent-movie-storage-xyz';
	constructor() {}

	ngOnInit(): void {
		const store = localStorage.getItem(this.LOCAL_STORAGE_TITLE);
		this.movies = store ? JSON.parse(store) : [];
	}
}
