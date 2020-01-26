const env = process.env.env || 'development';

const EnvConfig = {
    development: {
        api: 'http://dev-services.bluephage.com/api/v1/',
    },
    staging: {
        api: 'http://dev-services.bluephage.com/api/v1/',
    },
    production: {
        api: 'http://dev-services.bluephage.com/api/v1/',
    },
}[env];

export default EnvConfig;
