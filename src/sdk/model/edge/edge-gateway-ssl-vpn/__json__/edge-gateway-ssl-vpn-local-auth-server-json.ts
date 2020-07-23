import { EdgeGatewaySslVpnAccountLockoutPolicyJson } from './edge-gateway-ssl-vpn-account-lockout-policy-json';
import { EdgeGatewaySslVpnAuthServerJson } from './edge-gateway-ssl-vpn-auth-server-json';
import { EdgeGatewaySslVpnPasswordPolicyJson } from './edge-gateway-ssl-vpn-password-policy-json';

export interface EdgeGatewaySslVpnLocalAuthServerJson extends EdgeGatewaySslVpnAuthServerJson {
  enabled: boolean;
  secondary_auth_server: boolean;
  terminate_session_on_auth_fails: boolean;
  password_policy: EdgeGatewaySslVpnPasswordPolicyJson;
  account_lockout_policy: EdgeGatewaySslVpnAccountLockoutPolicyJson;
}
