import { EdgeGatewaySslVpnAuthServerJson } from './edge-gateway-ssl-vpn-auth-server-json';

export interface EdgeGatewaySslVpnRadiusAuthServerJson extends EdgeGatewaySslVpnAuthServerJson {
  enabled: boolean;
  secondary_auth_server: boolean;
  terminate_session_on_auth_fails: boolean;
  ip: string;
  port: number;
  timeout: number;
  secret: string;
  nas_ip: string;
  retry_count: number;
}
