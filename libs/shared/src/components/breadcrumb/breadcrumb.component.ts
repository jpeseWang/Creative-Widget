import { Component, Input } from '@angular/core';

@Component({
	selector: 'mp-breadcrumb',
	templateUrl: './breadcrumb.component.html',
	styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
	@Input() parent = 'Dashboard';
	@Input() firstChild = '';
	@Input() secondChild = '';
}
