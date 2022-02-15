import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, WishListAction } from '../actions/wishlist.action';
import { MovieBasicInfo } from '../models/movieBasicInfo.model';

export interface WishListState {
	movies: MovieBasicInfo[];
}

export const INITIAL_STATE: WishListState = {
	movies: [
		// {
		// 	id: 634649,
		// 	overview:
		// 		'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
		// 	poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
		// 	title: 'Spider-Man: No Way Home',
		// },
		// {
		// 	id: 524434,
		// 	overview:
		// 		'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
		// 	poster_path: '/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg',
		// 	title: 'Spider-Man: No Way Home',
		// },
	],
};

export function wishListReducer(state = INITIAL_STATE, action: WishListAction): WishListState {
	switch (action.type) {
		case ADD_TO_WISHLIST: {
			const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
			if (index === -1) {
				return {
					...state,
					movies: [...state.movies, action.payload],
				};
			} else {
				return state;
			}
		}
		case REMOVE_FROM_WISHLIST: {
			const index = state.movies.findIndex((movie) => movie.id === action.payload.id);
			state.movies.splice(index, 1);
			return state;
		}
		default:
			return state;
	}
}
