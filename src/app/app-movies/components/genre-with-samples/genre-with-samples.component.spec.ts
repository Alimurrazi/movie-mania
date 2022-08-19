import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreWithSamplesComponent } from './genre-with-samples.component';

describe('GenreWithSamplesComponent', () => {
	let component: GenreWithSamplesComponent;
	let fixture: ComponentFixture<GenreWithSamplesComponent>;
	let id = 28;
	let name = 'Action';

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GenreWithSamplesComponent],
			imports: [HttpClientTestingModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GenreWithSamplesComponent);
		component = fixture.componentInstance;
		component.id = id;
		component.name = name;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
