export interface MovieListItem {
	poster_path: string | null;
	adult: boolean;
	overview: string;
	release_date: string;
	genre_ids: number[];
	id: number;
	original_title: string;
	original_language: string;
	title: string;
	backdrop_path: string | null;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
}

export interface GenreWithSamples {
	page: number;
	total_pages: number;
	total_results: number;
	results: MovieListItem[];
}
