import { Component, Input, OnInit } from '@angular/core';
import { MovieListItem } from '../../interfaces/GenreWithSamples.interface';

@Component({
	selector: 'app-movie-item',
	templateUrl: './movie-item.component.html',
	styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
	@Input() config: MovieListItem;
	constructor() {}

	ngOnInit(): void {}
}
