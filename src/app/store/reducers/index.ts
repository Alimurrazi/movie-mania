import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../models/state.model';
import { wishListReducer } from './wishlist.reducer';
import { WishListAction } from '../actions/wishlist.action';

export const rootReducer = {};

//TODO: need to update type to more generic
export const reducers: ActionReducerMap<AppState, WishListAction> = {
	wishList: wishListReducer,
};
