export abstract class CookieService {
	getAll: () => any;
	get: (name: string) => any;
	set: (name: string, value: any) => void;
	remove: (name: string) => void;
}

export interface Cookie {
	[key: string]: string;
}
