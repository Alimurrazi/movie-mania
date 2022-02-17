import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface DialogData {
	key: string;
}

@Component({
	selector: 'app-movie-trailer',
	templateUrl: './movie-trailer.component.html',
	styleUrls: ['./movie-trailer.component.css'],
})
export class MovieTrailerComponent {
	constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private domSanitizer: DomSanitizer) {}

	getTrustedUrl(): SafeResourceUrl {
		return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.data.key}`);
	}
}
