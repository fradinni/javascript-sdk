import { AddressGroupJson } from './__json__/vnic-address-group-json';
import { SecondaryAddresses } from './vnic-secondary-addresses';

/**
 * Edge Gateway VNIC Address Group.
 */
/* istanbul ignore next: autogenerated */
export class AddressGroup {

  constructor(private _json: AddressGroupJson) {
  }

  /**
   * Get primary address.
   * @returns {string}
   */
  get primaryAddress(): string {
    return this._json.primary_address;
  }

  /**
   * Get secondary addresses.
   * @returns {SecondaryAddresses}
   */
  get secondaryAddresses(): SecondaryAddresses | null {
    return this._json.secondary_addresses ? new SecondaryAddresses(this._json.secondary_addresses) : null;
  }

  /**
   * Get subnet mask.
   * @returns {string}
   */
  get subnetMask(): string {
    return this._json.subnet_mask;
  }

  /**
   * Get subnet prefix length.
   * @returns {number}
   */
  get subnetPrefixLength(): number {
    return this._json.subnet_prefix_length;
  }

  /**
   * Get the json representation of this class.
   * @returns {AddressGroup}
   */
  get json(): AddressGroupJson {
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
