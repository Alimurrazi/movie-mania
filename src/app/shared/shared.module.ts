import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentMoviesComponent } from './components/recent-movies/recent-movies.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [RecentMoviesComponent],
	imports: [CommonModule, RouterModule],
	exports: [RecentMoviesComponent],
})
export class SharedModule {}
