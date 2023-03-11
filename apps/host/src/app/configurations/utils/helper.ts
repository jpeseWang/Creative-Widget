export function isNotEmpty(value: any): boolean {
	return value !== undefined && value !== null && value !== '';
}

export function removeEmptyValues(object: any) {
	for (var key in object) {
		if (object.hasOwnProperty(key)) {
			var value = object[key];
			if (value === null || value === undefined || value === '') {
				delete object[key];
			}
		}
	}
}
