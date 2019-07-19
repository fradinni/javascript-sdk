import { AxiosResponse } from 'axios';

export const MockEdgeGatewayFirewallSourceObjectsResponse = new Promise<AxiosResponse>(
    function(resolve) {
      resolve({
        data: {},
        status: 200,
        statusText: '',
        headers: {},
        config: {}
      });
    });
