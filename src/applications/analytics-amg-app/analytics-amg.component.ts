import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {serverConfig} from 'config/server';
import {AnalyticsAmgMainViewService} from 'app-shared/kmc-shared/kmc-views';

@Component({
    selector: 'analyticsAmg',
    templateUrl: './analytics-amg.component.html',
    styleUrls: ['./analytics-amg.component.scss']
})

export class AnalyticsAmgComponent implements OnInit, AfterViewInit, OnDestroy {

    public analyticsAmgUrl;

    constructor(
        private _analyticsAmgMainView: AnalyticsAmgMainViewService,
        private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        if (this._analyticsAmgMainView.viewEntered()) {

            this.analyticsAmgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(serverConfig.externalApps.analyticsAmg.uri);
        }
    }

    ngAfterViewInit() {
    }

    ngOnDestroy() {
        this.analyticsAmgUrl = null;
    }
}
