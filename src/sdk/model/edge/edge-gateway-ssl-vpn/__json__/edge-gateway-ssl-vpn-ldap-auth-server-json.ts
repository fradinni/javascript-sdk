import { EdgeGatewaySslVpnAuthServerJson } from './edge-gateway-ssl-vpn-auth-server-json';

export interface EdgeGatewaySslVpnLdapAuthServerJson extends EdgeGatewaySslVpnAuthServerJson {
  enabled: boolean;
  secondary_auth_server: boolean;
  terminate_session_on_auth_fails: boolean;
  enable_ssl: boolean;
  ip: string;
  port: number;
  timeout: number;
  search_base: string;
  bind_domain_name: string;
  bind_password: string;
  login_attribute_name: string;
  search_filter: string;
}
