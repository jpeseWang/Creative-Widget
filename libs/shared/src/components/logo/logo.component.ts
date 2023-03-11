import { Component, Input } from '@angular/core';

@Component({
	selector: 'mp-logo',
	templateUrl: './logo.component.html',
	styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
	@Input() color: 'white' | 'primary' = 'white';
	@Input() width = 100;
}
