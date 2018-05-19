import { getJSON, remove, set } from "js-cookie";
import { CookieService } from "./cookie.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ClientCookieService implements CookieService {

	public set(name: string, value: any): void {
			set(name, value);
	}

	public remove(name: string): void {
			remove(name);
	}

	public get(name: string): any {
			return getJSON(name);
	}

	public getAll(): any {
			return getJSON();
	}
}

