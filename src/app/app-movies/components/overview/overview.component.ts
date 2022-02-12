/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import { genreItem } from '../../interfaces/Genre.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
	genreList: genreItem[] = [];
	constructor(private moviesService: MoviesService) {}

	ngOnInit(): void {
		this.moviesService.getGenreList().subscribe(
			(res) => {
				if (res && res.genres) {
					this.genreList = res.genres;
				}
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
