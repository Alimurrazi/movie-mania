import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
	{
		path: '',
		component: OverviewComponent,
	},
];

@NgModule({
	declarations: [OverviewComponent],
	imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
})
export class AppMoviesModule {}
