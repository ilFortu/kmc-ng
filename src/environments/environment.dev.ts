// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/*************************************************
 * Developer notice:
 * To simplify usage of the configuration consider exposing
 * those properties in 'src/configuration/global-config.ts' file
 *************************************************/

export const environment = {
    production: false,
    client: {
        useSecuredProtocol: false
    },
    serverConfig: {
        kalturaServer: {
            previewUIConf: 30000996,
            uri: 'staging-joe.streamuk.com',
            deployUrl: '/apps/kmcng/current/'
        },
        cdnServers: {
            serverUri: 'http://staging-joe.streamuk.com',
            securedServerUri: 'https://staging-joe.streamuk.com'
        },
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
                uri: '/__local_machine_only__/studio_v3_2_0/index.html',
                html5_version: 'v2.55',
                html5lib: '/html5/html5lib/v2.55/mwEmbedLoader.php',
                playerVersionsMap: '{\'kaltura-ovp-player\':\'0.27.4\',\'kaltura-tv-player\':\'0.27.4\',\'playkit-ima\':\'0.6.1\',\'playkit-youbora\':\'0.4.1\',\'playkit-comscore\':\'1.0.4\',\'playkit-google-analytics\':\'0.1.3\',\'playkit-offline-manager\':\'1.0.2\'}'
            },*/
            analyticsAmg: {uri: '/analytics/index.php'},
            //liveDashboard: {uri: '/apps/live-dashboard_v1_4_1/index.html'},
            //usageDashboard: {uri: '/__local_machine_only__/usage-dashboard-v1_0_0/index.html'},
            //editor: {uri: '/__local_machine_only__/kea-v2.25.0/index.html'},
            //reach: {uri: '/__local_machine_only__/reach-v5_75_08/index.html'}
        }
    }
};
