import { Action } from 'redux';
import { MovieBasicInfo } from '../models/movieBasicInfo.model';

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export class AddToWishListAction implements Action {
	readonly type = ADD_TO_WISHLIST;
	constructor(public payload: MovieBasicInfo) {}
}

export class RemoveFromWishListAction implements Action {
	readonly type = REMOVE_FROM_WISHLIST;
	constructor(public payload: MovieBasicInfo) {}
}

export type WishListAction = AddToWishListAction | RemoveFromWishListAction;
