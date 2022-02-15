import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = [
	{
		path: '',
		component: WishlistComponent,
	},
];

@NgModule({
	declarations: [WishlistComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatButtonModule,
		MatIconModule,
		FlexLayoutModule,
		MatTooltipModule,
		MatDividerModule,
	],
})
export class AppWishlistModule {}
