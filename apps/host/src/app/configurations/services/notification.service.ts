import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class NotificationService {
	constructor() // eslint-disable-next-line @typescript-eslint/no-empty-function
	{}

	/**
	 * Presents a toast displaying the message with a green background
	 * @param message Message to display
	 * @example
	 * this.notificationService.success("confirm oked");
	 */
	success(message: string) {
		console.log(message);
	}

	/**
	 * Presents a toast displaying the message with a red background
	 * @param message Message to display
	 * @example
	 * this.notificationService.error("confirm canceled");
	 */
	error(message: string) {
		console.error(message);
	}
}
