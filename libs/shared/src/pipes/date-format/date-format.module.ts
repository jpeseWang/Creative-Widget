import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DateFormatPipe } from './date-format.pipe';

@NgModule({
	imports: [CommonModule],
	declarations: [DateFormatPipe],
	exports: [DateFormatPipe],
})
export class DateFormatModule {}
// TODO: tach ra thanh 1 file rieng
