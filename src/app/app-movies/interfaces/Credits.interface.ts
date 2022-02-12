export interface Cast {
	cast_id: number;
	character: string;
	id: number;
	name: string;
	profile_path: string;
}

export interface Crew {
	id: number;
	name: string;
	job: string;
	profile_path: string;
}

export interface Credits {
	id: number;
	cast: Cast[];
	crew: Crew[];
}
