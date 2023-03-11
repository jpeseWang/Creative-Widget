import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	imports: [CommonModule, RouterModule],
	selector: 'dgm-not-found-page',
	templateUrl: './not-found.page.html',
	standalone: true,
})
export class PageNotFoundComponent {}
