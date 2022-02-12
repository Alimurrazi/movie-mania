export interface MovieRecommend {
	id: number;
	overview: string;
	title: string;
	poster_path: string;
	vote_average: number;
	vote_count: number;
}

export interface MovieRecommends {
	page: number;
	results: MovieRecommend[];
}
