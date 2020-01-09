export const environment = {
    production: true,
    client: {
        useSecuredProtocol: false
    },
    serverConfig: {
        kalturaServer: {
            previewUIConf: 30000967,
            uri: 'staging-k9.streamuk.com',
            deployUrl: '/apps/kmcng/current/'
        },
        cdnServers: {serverUri: 'http://staging-k9.streamuk.com', securedServerUri: 'https://staging-k9.streamuk.com'},
        externalLinks: {
            kaltura: {
                support: 'sysadmins@streamuk.com',
                contactUs: 'https://www.streamamg.com/contact/',
                upgradeAccount: 'https://www.streamamg.com/contact/'
            }
        },
        externalApps: {
            studioV2: {
                uri: '/apps/studio/v2.0.0/index.html',
                html5_version: 'v2.55',
                html5lib: '/html5/html5lib/v2.55/mwEmbedLoader.php'
            },
            /*studioV3: {
                uri: '/apps/studio_v3_2_0/index.html',
                html5_version: 'v2.55',
                html5lib: '/html5/html5lib/v2.55/mwEmbedLoader.php',
                playerVersionsMap: '{\'kaltura-ovp-player\':\'0.27.4\',\'kaltura-tv-player\':\'0.27.4\',\'playkit-ima\':\'0.6.1\',\'playkit-youbora\':\'0.4.1\',\'playkit-comscore\':\'1.0.4\',\'playkit-google-analytics\':\'0.1.3\',\'playkit-offline-manager\':\'1.0.2\'}'
            },*/
            analyticsAmg: {uri: '/analytics/index.php'},
            //liveDashboard: {uri: '/apps/live-dashboard_v1_4_1/index.html'},
            //usageDashboard: {uri: '/apps/usage-dashboard-v1_0_0/index.html'},
            //editor: {uri: '/apps/kea-v2.25.0/index.html'},
            //reach: {uri: '/apps/reach-v5_75_08/index.html'}
        }
    }
};
