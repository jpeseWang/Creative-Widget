export function formatDate(value: any): string {
	const date = new Date(value);
	const yyyy = date.getFullYear();
	let mm = (date.getMonth() + 1).toString(); // Months start at 0!
	let dd = date.getDate().toString();

	if (Number(dd) < 10) dd = '0' + dd;
	if (Number(mm) < 10) mm = '0' + mm;

	const formattedDate = dd + '/' + mm + '/' + yyyy;

	return formattedDate;
}

export function formatDateQuery(date: any) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-');
}
