import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GenreWithSamplesComponent } from './components/genre-with-samples/genre-with-samples.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LineTruncationLibModule } from 'ngx-line-truncation';
import { MaterialElevationDirective } from '../directives/material-elevation.directive';
import { GenreDetailsPageComponent } from './components/genre-details-page/genre-details-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { PersonalInfoComponent } from './components/movie-details/components/personal-info/personal-info.component';

const routes: Routes = [
	{
		path: '',
		component: OverviewComponent,
	},
	{
		path: 'genre/:genreName/:genreId',
		component: GenreDetailsPageComponent,
	},
	{
		path: 'movie-details/:movieId',
		component: MovieDetailsComponent,
	},
];

@NgModule({
	declarations: [
		OverviewComponent,
		GenreWithSamplesComponent,
		MovieItemComponent,
		MaterialElevationDirective,
		GenreDetailsPageComponent,
		MovieDetailsComponent,
		PersonalInfoComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		HttpClientModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		FlexLayoutModule,
		MatTooltipModule,
		LineTruncationLibModule,
		MatInputModule,
		MatSelectModule,
	],
})
export class AppMoviesModule {}
