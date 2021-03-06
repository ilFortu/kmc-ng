import { Injectable } from '@angular/core';
import { cancelOnDestroy, tag } from '@kaltura-ng/kaltura-common';
import { WidgetsManagerBase } from '@kaltura-ng/kaltura-ui'
import { KalturaMultiRequest } from 'kaltura-ngx-client';
import { KalturaPlaylist } from 'kaltura-ngx-client';
import { PlaylistStore } from './playlist-store.service';
import {KalturaLogger} from '@kaltura-ng/kaltura-logger';

@Injectable()
export class PlaylistWidgetsManager extends WidgetsManagerBase<KalturaPlaylist, KalturaMultiRequest> {
  private _playlistStore: PlaylistStore;

  constructor(logger: KalturaLogger) {
    super(logger.subLogger('PlaylistWidgetsManager'));
  }

  set playlistStore(value: PlaylistStore) {
    this._playlistStore = value;
  }

  public returnToPlaylists(): void {
    if (this._playlistStore) {
      this._playlistStore.returnToPlaylists();
    }
  }
}
