import { Component, Input } from '@angular/core';

@Component({
	selector: 'mp-skeleton-block',
	templateUrl: './skeleton-block.component.html',
	styleUrls: ['./skeleton-block.component.scss'],
})
export class SkeletonBlockComponent {
	@Input() width = '100%';
	@Input() height = '30px';
}
