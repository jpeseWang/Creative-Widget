export interface PageSizeOption {
	value: number;
	label: string;
}

export const DOTS = '...';

export const initialPageSizeOption: PageSizeOption[] = [
	{
		value: 10,
		label: '10',
	},
	{
		value: 20,
		label: '20',
	},
];
