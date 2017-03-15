import { Injectable } from '@angular/core';
import {
    EntrySection
} from '../../entry-store/entry-section-handler';
import { EntrySectionTypes } from '../../entry-store/entry-sections-types';
import { KalturaServerClient } from '@kaltura-ng2/kaltura-api';
import { AppConfig, AppAuthentication } from '@kaltura-ng2/kaltura-common';
import { EntrySectionsManager } from '../../entry-store/entry-sections-manager';

export interface PreviewEntryData{
    landingPage : string;
    iFrameSrc : string;
}

@Injectable()
export class EntryPreviewHandler extends EntrySection
{
    public landingPage : string;
    public iframeSrc : string;

    constructor(manager : EntrySectionsManager,
                kalturaServerClient: KalturaServerClient,
                private appConfig: AppConfig,
                private appAuthentication: AppAuthentication)

    {
        super(manager);
    }

    public get sectionType() : EntrySectionTypes
    {
        return null;
    }

    /**
     * Do some cleanups if needed once the section is removed
     */
    protected _reset()
    {
        this.landingPage = null;
        this.iframeSrc = null;
    }

    protected _onDataLoading(dataId : any) {
        const landingPage = this.appAuthentication.appUser.partnerInfo.landingPage;
        if (landingPage) {
            landingPage.replace("{entryId}", dataId);
        }
        this.landingPage = landingPage;

        const UIConfID = this.appConfig.get('core.kaltura.previewUIConf');
        const partnerID = this.appAuthentication.appUser.partnerId;
        this.iframeSrc = this.appConfig.get('core.kaltura.cdnUrl') + '/p/' + partnerID + '/sp/' + partnerID + '00/embedIframeJs/uiconf_id/' + UIConfID + '/partner_id/' + partnerID + '?iframeembed=true&flashvars[EmbedPlayer.SimulateMobile]=true&&flashvars[EmbedPlayer.EnableMobileSkin]=true&entry_id=' + dataId;
    }

    protected _activate(firstLoad : boolean) {
      // do nothing
    }
}