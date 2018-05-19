import { REQUEST } from "@nguniversal/express-engine/tokens";
import { Inject, Injectable } from "@angular/core";
import { CookieService, Cookie } from "./cookie.model";
import { parseCookies } from "./cookie.util";
import { TestRequest } from "./request.model";



@Injectable()
export class ServerCookieService implements CookieService {

	constructor(
		@Inject(REQUEST) private request: TestRequest
	) {
	}

	public set(name: string, value: any, ): void {
		const cookies = this.getAll();
		cookies[name] = value;

		this.request.headers.cookie = JSON.stringify(cookies);
	}

	public remove(name: string): void {
		const cookies = this.getAll();
		delete cookies[name];

		this.request.headers.cookie = JSON.stringify(cookies);
	}

	public get(name: string): any {
		const cookies = this.getAll();
		return cookies[name];
	}

	public getAll(): Cookie {
			return parseCookies(this.request.headers.cookie);
	}

}

