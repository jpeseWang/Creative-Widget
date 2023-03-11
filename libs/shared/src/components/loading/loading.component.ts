import { Component, Input } from '@angular/core';

@Component({
	selector: 'mp-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
	@Input() height = '30px';

	@Input() position = '';
}
