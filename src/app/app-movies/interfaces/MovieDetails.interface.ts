import { genreItem } from './Genre.interface';

export interface MovieDetails {
	genres: genreItem[];
	id: number;
	imdb_id: string;
	title: string;
	poster_path: string;
	overview: string;
	vote_average: number;
	vote_count: number;
}
