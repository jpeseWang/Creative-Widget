import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from '../endpoints';
import { HttpErrorResponse } from '../models';
import { NotificationService } from './notification.service';

@Injectable()
export class ApiService {
	constructor(private httpClient: HttpClient, private notificationService: NotificationService) {}

	get<T>(url: string, hideErrorMessage?: boolean): Observable<T> {
		return this.httpClient
			.get<T>(`${API_URL}/${url}`)
			.pipe(catchError(res => this.handleError(res.error, url, hideErrorMessage)));
	}

	// eslint-disable-next-line @typescript-eslint/ban-types
	getWithOptions<T>(url: string, params: {}): Observable<T> {
		return this.httpClient
			.get<T>(`${API_URL}/${url}`, { params })
			.pipe(catchError(res => this.handleError(res.error, url)));
	}

	post<T>(url: string, data: any, hideErrorMessage?: boolean): Observable<T> {
		return this.httpClient.post<T>(`${API_URL}/${url}`, data).pipe(
			catchError(res => {
				return this.handleError(res.error, url, hideErrorMessage);
			})
		);
	}

	postFile<T>(url: string, files: File[], hideErrorMessage?: boolean): Observable<HttpEvent<T>> {
		const formData: FormData = new FormData();
		for (const file of files) {
			formData.append(file.name, file, file.name);
		}
		const uploadReq = new HttpRequest('POST', `${API_URL}/${url}`, formData, {
			reportProgress: true,
		});

		return this.httpClient.request(uploadReq);
	}

	update<T>(url: string, data: any, hideErrorMessage?: boolean): Observable<T> {
		return this.httpClient
			.patch<T>(`${API_URL}/${url}`, data)
			.pipe(catchError(res => this.handleError(res.error, url, hideErrorMessage)));
	}

	delete<T>(url: string, data?: any | null, hideErrorMessage?: boolean): Observable<T> {
		return this.httpClient
			.delete<T>(`${API_URL}/${url}`, {
				body: data,
			})
			.pipe(catchError(res => this.handleError(res.error, url, hideErrorMessage)));
	}

	private handleError(
		response: HttpErrorResponse,
		requestUrl?: string,
		hideErrorMessage?: boolean
	) {
		//
		if (response.status === 403) {
			return throwError(response.message);
		}
		//
		if (response.status === 500) {
			if (!hideErrorMessage) {
				this.notificationService.error(response.message);
			}

			return throwError(response);
		}

		if (!hideErrorMessage) {
			this.notificationService.error(response.message);
		}

		// return an observable with a user-facing error message
		return throwError(response?.error);
	}
}
