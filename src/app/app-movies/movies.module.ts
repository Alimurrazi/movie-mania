import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { LineTruncationLibModule } from 'ngx-line-truncation';
import { MaterialElevationDirective } from '../directives/material-elevation.directive';
import { GenreDetailsPageComponent } from './components/genre-details-page/genre-details-page.component';
import { GenreWithSamplesComponent } from './components/genre-with-samples/genre-with-samples.component';
import { PersonalInfoComponent } from './components/movie-details/components/personal-info/personal-info.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MovieTrailerComponent } from './components/movie-trailer/movie-trailer.component';
import { MatDialogModule } from '@angular/material/dialog';

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
		MovieTrailerComponent,
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
		MatDialogModule,
	],
	entryComponents: [MovieTrailerComponent],
})
export class AppMoviesModule {}
