import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../interfaces/Genre.interface';
import { environment } from '../../../environments/environment';
import { GenreWithSamples } from '../interfaces/GenreWithSamples.interface';

@Injectable({
	providedIn: 'root',
})
export class MoviesService {
	constructor(private httpClient: HttpClient) {}
	getGenreList(): Observable<Genre> {
		return this.httpClient.get<Genre>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${environment.apiKey}`);
	}

	getGenreSamples(genreId: number): Observable<GenreWithSamples> {
		return this.httpClient.get<GenreWithSamples>(
			`https://api.themoviedb.org/3/discover/movie?api_key=${environment.apiKey}&with_genres=${genreId}`
		);
	}
}
