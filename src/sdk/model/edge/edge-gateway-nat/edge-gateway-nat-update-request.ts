import { EdgeGatewayNatRuleJson } from './__json__/edge-gateway-nat-rule-json';
import { EdgeGatewayNatUpdateRequestJson } from './__json__/edge-gateway-nat-update-request-json';
import { EdgeGatewayNat64RuleJson } from './__json__/edge-gateway-nat64-rule-json';
import { EdgeGatewayNatRule } from './edge-gateway-nat-rule';
import { EdgeGatewayNat64Rule } from './edge-gateway-nat64-rule';

/**
 * Edge Gateway NAT Update Request
 */
/* istanbul ignore next: autogenerated */
export class EdgeGatewayNatUpdateRequest {

  private readonly _json: EdgeGatewayNatUpdateRequestJson;

  constructor(edgeGatewayNATUpdateRequest: EdgeGatewayNatUpdateRequest);
  constructor(edgeGatewayNATUpdateRequestJson: EdgeGatewayNatUpdateRequestJson);
  constructor(enabled: boolean, natRules: Array<EdgeGatewayNatRuleJson>, nat64Rules: Array<EdgeGatewayNat64RuleJson>);
  constructor(firstParam: boolean | EdgeGatewayNatUpdateRequest | EdgeGatewayNatUpdateRequestJson,
              natRules?: Array<EdgeGatewayNatRuleJson>,
              nat64Rules?: Array<EdgeGatewayNat64RuleJson>) {
    if (typeof firstParam === 'boolean') {
      // Parameters constructor
      this._json = {
        enabled: firstParam,
        nat_rules: natRules,
        nat64_rules: nat64Rules
      } as EdgeGatewayNatUpdateRequestJson;
    } else if (firstParam instanceof EdgeGatewayNatUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as EdgeGatewayNatUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as EdgeGatewayNatUpdateRequestJson;
    }
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get nat rules.
   * @returns {Array<EdgeGatewayNatRule>}
   */
  get natRules(): Array<EdgeGatewayNatRule> {
    return this._json.nat_rules.map(it => new EdgeGatewayNatRule(it));
  }

  /**
   * Get nat64 rules.
   * @returns {Array<EdgeGatewayNat64Rule>}
   */
  get nat64Rules(): Array<EdgeGatewayNat64Rule> {
    return this._json.nat64_rules.map(it => new EdgeGatewayNat64Rule(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayNatUpdateRequestJson}
   */
  get json(): EdgeGatewayNatUpdateRequestJson {
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