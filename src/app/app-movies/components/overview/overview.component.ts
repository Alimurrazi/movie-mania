/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
	constructor(private moviesService: MoviesService) {}

	ngOnInit(): void {
		this.moviesService.getGenreList().subscribe((res) => {
			console.log(res);
		});
	}
}
