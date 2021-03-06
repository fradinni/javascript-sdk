import { EdgeSslVpnIpPoolJson } from './__json__/edge-ssl-vpn-json';

/**
 * EdgeSslVpnIpPool class
 */
/* istanbul ignore next: autogenerated */
export class EdgeSslVpnIpPool {

  constructor(private _json: EdgeSslVpnIpPoolJson) {
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get ip range.
   * @returns {string}
   */
  get ipRange(): string {
    return this._json.ip_range;
  }

  /**
   * Get netmask.
   * @returns {string}
   */
  get netmask(): string {
    return this._json.netmask;
  }

  /**
   * Get gateway.
   * @returns {string}
   */
  get gateway(): string {
    return this._json.gateway;
  }

  /**
   * Get primary dns.
   * @returns {string}
   */
  get primaryDns(): string {
    return this._json.primary_dns;
  }

  /**
   * Get secondary dns.
   * @returns {string}
   */
  get secondaryDns(): string {
    return this._json.secondary_dns;
  }

  /**
   * Get dns suffix.
   * @returns {string}
   */
  get dnsSuffix(): string {
    return this._json.dns_suffix;
  }

  /**
   * Get wins server.
   * @returns {string}
   */
  get winsServer(): string {
    return this._json.wins_server;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeSslVpnIpPoolJson}
   */
  get json(): EdgeSslVpnIpPoolJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}
