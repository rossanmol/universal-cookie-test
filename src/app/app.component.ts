import {Component, OnInit} from "@angular/core";
import { CookieService } from "./server/cookie.model";

@Component({
	selector: "app-root",
	template: `
	<h1>Universal Demo using Angular and Angular CLI</h1>
	<a routerLink="/">Home</a>
	<a routerLink="/lazy">Lazy</a>
	<a routerLink="/lazy/nested">Lazy_Nested</a>
	<router-outlet></router-outlet>
	`,
	styles: []
})
export class AppComponent implements OnInit {

	constructor(
		private cookieService: CookieService
	) {
	}

	ngOnInit() {
		console.log("wow", this.cookieService.getAll());
		console.log("wow", this.cookieService.set("lol", Math.random()));
	}
}
