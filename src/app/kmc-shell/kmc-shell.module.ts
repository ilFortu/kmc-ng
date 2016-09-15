import { NgModule, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule }       from '@angular/common';
import { KMCngCoreModule, AppStorage } from '@kaltura/kmcng-core';
import { KalturaApiModule } from '@kaltura/kaltura-api';
import { KMCngShellCoreModule } from '@kaltura/kmcng-shell';
import { GetBootstrapProvider, AppBootstrap, AppBootstrapConfig  as AppBootstrapConfigType } from '@kaltura/kmcng-core';
import { NG2_WEBSTORAGE } from 'ng2-webstorage';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { LanguageMenuComponent } from './components/language-menu/language-menu.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { UploadComponent } from './components/upload/upload.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { BrowserService } from '@kaltura/kmcng-shell';

import { KalturaAPIConfigAdapter } from './shared/kaltura-api-config-adapter.service';
import { KalturaAuthConfigAdapter } from './shared/kaltura-auth-config-adapter.service';
import {AppDefaultConfig} from "./shared/app-default-config.service";


@NgModule({
  imports:      [
    CommonModule,
    KMCngShellCoreModule,
    RouterModule.forChild([]),
    BrowserModule,
    HttpModule,
    KMCngCoreModule,
    KalturaApiModule,
    ],
  declarations: [
    DashboardComponent,
    AppMenuComponent,
    LanguageMenuComponent,
    LoginComponent,
    ErrorComponent,
    UploadComponent,
    UserSettingsComponent ],
  exports: [DashboardComponent,LoginComponent ],
  providers:    [
    GetBootstrapProvider(KalturaAPIConfigAdapter),
    GetBootstrapProvider(KalturaAuthConfigAdapter),
    AppDefaultConfig,
    NG2_WEBSTORAGE
  ]
})
export class KMCShellAppModule {
  constructor(appBootstrap: AppBootstrap, config: AppDefaultConfig){
    appBootstrap.initApp(<AppBootstrapConfigType>config);
  }
}
