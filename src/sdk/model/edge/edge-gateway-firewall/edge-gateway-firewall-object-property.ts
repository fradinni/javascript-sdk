import { EdgeGatewayFirewallObjectPropertyJson } from './__json__/edge-gateway-firewall-object-property-json';

/**
 * Edge Gateway Firewall Object Property
 */
/* istanbul ignore next: autogenerated */
export class EdgeGatewayFirewallObjectProperty {

  constructor(private _json: EdgeGatewayFirewallObjectPropertyJson) {}

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get value.
   * @returns {string}
   */
  get value(): string {
    return this._json.value;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayFirewallObjectProperty}
   */
  get json(): EdgeGatewayFirewallObjectPropertyJson {
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
