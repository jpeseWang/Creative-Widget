import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
	transform(input: Date, args?: any): any {
		return formatDate(input, 'yyyy-MM-dd', 'en-US');
	}
}
