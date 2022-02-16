import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentMoviesComponent } from './components/recent-movies/recent-movies.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	declarations: [RecentMoviesComponent],
	imports: [CommonModule, FlexLayoutModule],
	exports: [RecentMoviesComponent],
})
export class SharedModule {}
