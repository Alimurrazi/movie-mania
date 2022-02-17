export interface MovieVideo {
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	id: string;
}

export interface MovieVideos {
	id: number;
	results: MovieVideo[];
}
