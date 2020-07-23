import { EdgeGatewaySslVpnAuthServerJson } from './edge-gateway-ssl-vpn-auth-server-json';

export interface EdgeGatewaySslVpnRsaAuthServerJson extends EdgeGatewaySslVpnAuthServerJson {
  enabled: boolean;
  secondary_auth_server: boolean;
  terminate_session_on_auth_fails: boolean;
  timeout: number;
  config_file: string;
  source_ip: string;
}
