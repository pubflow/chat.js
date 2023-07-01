import { createClient } from 'nhost-js-sdk';

const config = {
  baseURL: '<NHOST_API_ENDPOINT>',
};

const nhostClient = createClient(config);

export default nhostClient;
