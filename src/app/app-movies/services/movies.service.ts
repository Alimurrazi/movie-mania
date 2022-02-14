import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { Genre } from '../interfaces/Genre.interface';
import { environment } from '../../../environments/environment';
import { GenreWithSamples } from '../interfaces/GenreWithSamples.interface';
import { MovieDetails } from '../interfaces/MovieDetails.interface';
import { Credits } from '../interfaces/Credits.interface';
import { MovieRecommends } from '../interfaces/MovieRecommends.interface';
@Injectable({
	providedIn: 'root',
})
export class MoviesService {
	constructor(private httpClient: HttpClient) {}
	getGenreList(): Observable<Genre> {
		return this.httpClient.get<Genre>(`https://api.themoviedb.org/3/genre/movie/list?api_key=${environment.apiKey}`);
	}

	getGenreSamples(genreId: number, sortedBy = 'popularity.desc'): Observable<GenreWithSamples> {
		return this.httpClient.get<GenreWithSamples>(
			`https://api.themoviedb.org/3/discover/movie?api_key=${environment.apiKey}&with_genres=${genreId}&sort_by=${sortedBy}`
		);
	}

	getMovieDetailsCreditsRecommends(movieId: number): Observable<any[]> {
		const detailsUrl = this.httpClient.get<MovieDetails>(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=${environment.apiKey}`
		);
		const creditsUrl = this.httpClient.get<Credits>(
			`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${environment.apiKey}`
		);
		const recommendUrl = this.httpClient.get<MovieRecommends>(
			`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${environment.apiKey}`
		);
		return forkJoin([detailsUrl, creditsUrl, recommendUrl]);
	}
}
