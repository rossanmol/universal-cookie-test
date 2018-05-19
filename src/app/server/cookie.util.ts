export function parseCookies(cookies: string) {
	return cookies
		.split(/[;] */)
		.reduce((result, pairStr) => {
				const arr = pairStr.split("=");
				if (arr.length === 2) { result[arr[0]] = arr[1]; }
				return result;
		}, {});
}
