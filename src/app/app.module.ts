import {BrowserModule, TransferState, makeStateKey} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { REQUEST } from "@nguniversal/express-engine/tokens";
import { PlatformService } from "./server/platform.service";
import { CookieService } from "./server/cookie.model";
import { ClientCookieService } from "./server/cookie-client.service";
import { ServerCookieService } from "./server/cookie-server.service";
import { TestRequest } from "./server/request.model";

export const REQ_KEY = makeStateKey<string>("req");
export const RES_KEY = makeStateKey<string>("res");

export function cookieServiceFactory(platformService: PlatformService, request: TestRequest) {
	return platformService.isBrowser ? new ClientCookieService() : new ServerCookieService(request);
}

@NgModule({
declarations: [
	AppComponent,
	HomeComponent,
],
imports: [
	BrowserModule.withServerTransition({appId: "my-app"}),
	RouterModule.forRoot([
		{ path: "", component: HomeComponent, pathMatch: "full" },
		{ path: "lazy", loadChildren: "./lazy/lazy.module#LazyModule" },
		{ path: "lazy/nested", loadChildren: "./lazy/lazy.module#LazyModule" }
	]),
	TransferHttpCacheModule,
],
providers: [
	{
		provide: CookieService,
		useFactory: cookieServiceFactory,
		deps: [
			PlatformService,
			REQUEST
		]
	},
	PlatformService
],
bootstrap: [AppComponent]
})
export class AppModule { }
