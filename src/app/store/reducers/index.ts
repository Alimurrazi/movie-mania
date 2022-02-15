import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../models/state.model';
import { wishListReducer } from './wishlist.reducer';

export const rootReducer = {};

export const reducers: ActionReducerMap<AppState> = {
	wishList: wishListReducer,
};
