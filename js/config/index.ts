import env from 'react-native-config';
import ConfigType from './type';

const IS_PRODUCTION = env.IS_PRODUCTION === 'true';

let ENVIRONMENT = IS_PRODUCTION ? 'production' : 'staging';

const config: ConfigType = {
  API: {
    host: env.API_HOST,
  },
};

const API_HOST = config.API.host;

export { API_HOST, ENVIRONMENT };
