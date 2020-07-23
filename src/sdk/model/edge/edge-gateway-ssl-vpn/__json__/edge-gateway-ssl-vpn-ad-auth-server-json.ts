import { EdgeGatewaySslVpnAuthServerJson } from './edge-gateway-ssl-vpn-auth-server-json';

export interface EdgeGatewaySslVpnAdAuthServerJson extends EdgeGatewaySslVpnAuthServerJson {
  enabled: boolean;
  secondary_auth_server: boolean;
  terminate_session_on_auth_fails: boolean;
  ip: string;
  port: number;
  timeout: number;
  enable_ssl: boolean;
  search_base: string;
  bind_domain_name: string;
  bind_password: string;
  login_attribute_name: string;
  search_filter: string;
}
