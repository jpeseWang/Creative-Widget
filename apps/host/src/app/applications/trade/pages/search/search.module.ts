import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

@NgModule({
	declarations: [SearchComponent],
	imports: [CommonModule, RouterModule.forChild([{ path: '', component: SearchComponent }])],
	exports: [],
})
export class SearchModule {}
