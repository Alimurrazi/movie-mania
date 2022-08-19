import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { WishlistComponent } from './wishlist.component';

describe('WishlistComponent', () => {
	let component: WishlistComponent;
	let fixture: ComponentFixture<WishlistComponent>;
	const initialState = {};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [WishlistComponent],
			providers: [provideMockStore({ initialState })],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(WishlistComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
