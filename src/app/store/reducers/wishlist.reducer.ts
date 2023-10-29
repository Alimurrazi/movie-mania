import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, WishListAction } from '../actions/wishlist.action';
import { MovieBasicInfo } from '../models/movieBasicInfo.model';

export interface WishListState {
	movies: MovieBasicInfo[];
}

export const INITIAL_STATE: WishListState = {
	movies: [],
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
