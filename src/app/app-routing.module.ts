import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'movies',
		pathMatch: 'full',
	},
	{
		path: 'movies',
		loadChildren: () => import('./app-movies/movies.module').then((module) => module.AppMoviesModule),
	},
	{
		path: 'wishlist',
		loadChildren: () => import('./app-wishlist/wishlist.module').then((module) => module.AppWishlistModule),
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
