import { ExternalApplications } from 'config/server';

/**
 * Note the behaviour of the configuration package has been changed drastically to fit our environments.
 *  The generation of the server config is now done automatically with every build as it doesn't contain
 *   sensitive information.
 */

export interface StreamAmgConfig {
    serverConfig: {
        kalturaServer: {
            uri: string;
            previewUIConf: number;
        };
        cdnServers: {
            serverUri: string;
            securedServerUri: string;
        };
        externalLinks: {
            kaltura: {
                support: string;
                contactUs: string;
                upgradeAccount: string;
            };
        };
        externalApps: ExternalApplications
    };
}
