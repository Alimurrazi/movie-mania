import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../interfaces/Genre.interface';

@Injectable({
	providedIn: 'root',
})
export class MoviesService {
	constructor(private httpClient: HttpClient) {}
	getGenreList(): Observable<Genre> {
		return this.httpClient.get<Genre>(
			'https://api.themoviedb.org/3/genre/movie/list?api_key=cd890f94a756b1518a2a17617a5b430e'
		);
	}
}
