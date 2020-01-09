import { Injectable } from '@angular/core';
import { KMCPermissions, KMCPermissionsService } from '../../kmc-permissions';
import { KalturaLogger } from '@kaltura-ng/kaltura-logger';
import { KmcMainViewBaseService, ViewMetadata } from '../kmc-main-view-base.service';
import { Router } from '@angular/router';
import { serverConfig } from 'config/server';
import { BrowserService } from 'app-shared/kmc-shell/providers/browser.service';
import { AppLocalization } from '@kaltura-ng/mc-shared';
import { Title } from '@angular/platform-browser';
import { ContextualHelpService } from 'app-shared/kmc-shared/contextual-help/contextual-help.service';

@Injectable()
export class AnalyticsAmgMainViewService extends KmcMainViewBaseService {


    constructor(logger: KalturaLogger,
                browserService: BrowserService,
                router: Router,
                private _appPermissions: KMCPermissionsService,
                private _appLocalization: AppLocalization,
                titleService: Title,
                contextualHelpService: ContextualHelpService) {
        super(logger.subLogger('AnalyticsAmgMainViewService'), browserService, router, titleService, contextualHelpService);
    }

    isAvailable(): boolean {
        return true;
    }

    getRoutePath(): string {
        return 'analytics-amg';
    }

    getViewMetadata(): ViewMetadata {
        return {
            viewKey: 'analytics-amg',
             title: this._appLocalization.get('app.titles.analyticsAmgPageTitle'),
             menu: this._appLocalization.get('app.titles.analyticsAmgMenuTitle')
        };
    }
}


