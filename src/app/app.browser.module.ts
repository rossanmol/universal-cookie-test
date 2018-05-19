import {NgModule} from "@angular/core";
import {ServerTransferStateModule} from "@angular/platform-server";
import {ModuleMapLoaderModule} from "@nguniversal/module-map-ngfactory-loader";

import {AppModule, REQ_KEY, RES_KEY} from "./app.module";
import {AppComponent} from "./app.component";
import { TransferState } from "@angular/platform-browser";
import { REQUEST, RESPONSE } from "@nguniversal/express-engine/tokens";

export function getRequest(transferState: TransferState): any {
	return transferState.get<any>(REQ_KEY, {});
}

export function getResponse(transferState: TransferState): any {
	return transferState.get<any>(RES_KEY, {});
}

@NgModule({
	imports: [
		AppModule
	],
	bootstrap: [AppComponent],
	providers: [
		{
			provide: REQUEST,
			useFactory: getRequest,
			deps: [TransferState]
		},
		{
			provide: RESPONSE,
			useFactory: getResponse,
			deps: [TransferState]
		}
	]
})
export class AppBrowserModule {}
