import { Component, Input } from '@angular/core';

@Component({
	selector: 'dgm-item',
	templateUrl: './item.view.html',
	styleUrls: ['./item.view.scss'],
})
export class ItemComponent {
	@Input() item = '';
}
