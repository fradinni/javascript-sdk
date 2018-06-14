import { NetworkSubAllocation } from './network-sub-allocation';
import { NetworkIpScopeJson } from './__json__';
import { IpRange } from './ip-range';

/* istanbul ignore next: autogenerated */
export class NetworkIpScope {

  constructor(private _json: NetworkIpScopeJson) {
  }

  /**
   * Get inherited.
   * @returns {boolean}
   */
  get inherited(): boolean {
    return this._json.inherited;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get gateway.
   * @returns {string}
   */
  get gateway(): string {
    return this._json.gateway;
  }

  /**
   * Get netmask.
   * @returns {string}
   */
  get netmask(): string {
    return this._json.netmask;
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
   * Get ip ranges.
   * @returns {Array<IpRange>}
   */
  get ipRanges(): Array<IpRange> {
    return this._json.ip_ranges.map((ipRange) => { return new IpRange(ipRange); });
  }

  /**
   * Get allocated ip addresses.
   * @returns {Array<string>}
   */
  get allocatedIpAddresses(): Array<string> {
    return this._json.allocated_ip_addresses;
  }

  /**
   * Get sub allocations.
   * @returns {Array<NetworkSubAllocation>}
   */
  get subAllocations(): Array<NetworkSubAllocation> {
    return this._json.sub_allocations.map((alloc) => { return new NetworkSubAllocation(alloc); });
  }

  /**
   * Get the json representation of this class.
   * @returns {NetworkIpScopeJson}
   */
  get json(): NetworkIpScopeJson {
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