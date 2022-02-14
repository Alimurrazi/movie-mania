import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-personal-info',
	templateUrl: './personal-info.component.html',
	styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
	constructor() {}

	@Input() name: string;
	@Input() job: string;
	@Input() img: string;
	ngOnInit(): void {}
}
