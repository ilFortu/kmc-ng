import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnalyticsAmgComponent} from './analytics-amg.component';
import {KalturaUIModule} from '@kaltura-ng/kaltura-ui';
import {RouterModule} from "@angular/router";
import {routing} from "./stream-amg-app.routes";

@NgModule({
    imports: [
        CommonModule,
        KalturaUIModule,
        RouterModule.forChild(routing)
    ],

    declarations: [
        AnalyticsAmgComponent
    ],
    exports: [],
    providers: [],
})
export class AnalyticsAmgAppModule {
}
