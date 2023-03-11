import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { initialPagination, PaginationModel } from 'src/app/core/models';

import { DOTS, initialPageSizeOption, PageSizeOption } from './options';

@Component({
	selector: 'mp-paginator',
	templateUrl: './paginator.component.html',
	styleUrls: ['./paginator.component.scss'],
	standalone: true,
	imports: [CommonModule, MatPaginatorModule, MatIconModule],
})
export class PaginatorComponent implements OnChanges {
	@Input() pagination: PaginationModel | null;
	@Input() disabled: boolean | null;

	@Output() pageChange = new EventEmitter();

	pageSizeOptions: PageSizeOption[] = initialPageSizeOption;
	selectedPageSizeOption: PageSizeOption = initialPageSizeOption[0];

	siblingCount = 1;
	pageRange: Array<any> = [];
	lastPage = 0;
	dots = DOTS;

	constructor() {
		this.disabled = false;
		this.pagination = initialPagination;
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (
			changes &&
			changes['pagination'] &&
			changes['pagination']['currentValue'] &&
			this.pagination != null
		) {
			this.pageRange = this.paginationRange();
			this.lastPage = this.pageRange[this.pageRange?.length - 1] as number;

			if (changes['pagination'].firstChange) {
				this.selectedPageSizeOption = initialPageSizeOption.find(
					option => option.value === this.pagination!.take || option.value < 0
				)!;
			}
		}
	}

	onPageChange(page: number) {
		this.pageChange.emit({
			...this.pagination,
			page: page,
		});
	}

	onPrev() {
		if (this.pagination)
			this.pageChange.emit({
				...this.pagination,
				page: this.pagination.page > 1 ? this.pagination.page - 1 : 1,
			});
	}

	onNext() {
		if (this.pagination)
			this.pageChange.emit({
				...this.pagination,
				page: this.pagination.page ? this.pagination.page + 1 : this.pagination.page,
			});
	}

	onPageSizeOptionChange(pageOption: PageSizeOption) {
		this.selectedPageSizeOption = pageOption;

		const page = !!this.pagination && this.pagination?.page | 1;
		const totalCount: number =
			this.pagination && this.pagination.itemCount && this.pagination.itemCount
				? this.pagination.itemCount
				: 0;
		const pageCount = Math.ceil(totalCount / Math.abs(pageOption.value));
		this.pageChange.emit({
			...this.pagination,
			page: page > pageCount ? pageCount : page,
			pageSize: pageOption.value > 0 ? pageOption.value : this.pagination!.itemCount,
		});
	}

	range(start: number, end: number) {
		const length = end - start + 1;
		return Array.from({ length }, (_, idx) => idx + start);
	}

	paginationRange() {
		if (this.pagination != null) {
			const totalPageCount = this.pagination.pageCount ? this.pagination.pageCount : 0;

			// Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*this.dots
			const totalpages = this.siblingCount + 5;

			/*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
			if (totalpages >= totalPageCount) {
				return this.range(1, totalPageCount);
			}

			const leftSiblingIndex = Math.max(this.pagination.page - this.siblingCount, 1);
			const rightSiblingIndex = Math.min(
				this.pagination.page + this.siblingCount,
				totalPageCount
			);

			/*
      We do not want to show dots if there is only one position left
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
			const shouldShowLeftDots = leftSiblingIndex > 2;
			const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

			const firstPageIndex = 1;
			const lastPageIndex = totalPageCount;

			if (!shouldShowLeftDots && shouldShowRightDots) {
				const leftItemCount = 3 + 2 * this.siblingCount;
				const leftRange = this.range(1, leftItemCount);

				return [...leftRange, this.dots, totalPageCount];
			}

			if (shouldShowLeftDots && !shouldShowRightDots) {
				const rightItemCount = 3 + 2 * this.siblingCount;
				const rightRange = this.range(totalPageCount - rightItemCount + 1, totalPageCount);
				return [firstPageIndex, this.dots, ...rightRange];
			}

			if (shouldShowLeftDots && shouldShowRightDots) {
				const middleRange = this.range(leftSiblingIndex, rightSiblingIndex);
				return [firstPageIndex, this.dots, ...middleRange, this.dots, lastPageIndex];
			}
			return [];
		}
		return [];
	}
}
