import { DistributedFirewallLayer3UpdateRequestJson } from './__json__/distributed-firewall-layer3-update-request-json';
import { DistributedFirewallLayer3 } from './distributed-firewall-layer3';
import { DistributedFirewallLayer3Json } from './__json__/distributed-firewall-layer3-json';
import { DistributedFirewallLayer3RuleUpdateRequest } from './distributed-firewall-layer3-rule-update-request';

/* istanbul ignore next: autogenerated */
export class DistributedFirewallLayer3UpdateRequest {

  private readonly _json: DistributedFirewallLayer3UpdateRequestJson;

  constructor(distributedFirewallLayer3UpdateRequest: DistributedFirewallLayer3UpdateRequest);
  constructor(distributedFirewallLayer3UpdateRequestJson: DistributedFirewallLayer3UpdateRequestJson);
  constructor(firstParam: DistributedFirewallLayer3UpdateRequest | DistributedFirewallLayer3UpdateRequestJson,
              name?: string, tcpStrict?: boolean, stateless?: boolean, useSid?: boolean) {
    if (firstParam instanceof DistributedFirewallLayer3UpdateRequest) {
      // Copy constructor
      this._json = (firstParam as DistributedFirewallLayer3UpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as DistributedFirewallLayer3UpdateRequestJson;
    }
  }

  /**
   * Get rules.
   * @returns {Array<DistributedFirewallLayer3RuleUpdateRequest>}
   */
  get rules(): Array<DistributedFirewallLayer3RuleUpdateRequest> {
    return (this._json.rules || []).map(it => new DistributedFirewallLayer3RuleUpdateRequest(it));
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get tcp strict.
   * @returns {boolean}
   */
  get tcpStrict(): boolean {
    return this._json.tcp_strict;
  }

  /**
   * Get stateless.
   * @returns {boolean}
   */
  get stateless(): boolean {
    return this._json.stateless;
  }

  /**
   * Get use sid.
   * @returns {boolean}
   */
  get useSid(): boolean {
    return this._json.use_sid;
  }

  /**
   * Get the json representation of this class.
   * @returns {DistributedFirewallLayer3UpdateRequestJson}
   */
  get json(): DistributedFirewallLayer3UpdateRequestJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Create a DistributedFirewallLayer3UpdateRequest from a DistributedFirewallLayer3 Object.
   *
   * @param {DistributedFirewallLayer3} config Distributed Firewall Layer3 Object.
   * @returns {DistributedFirewallLayer3UpdateRequest} updateRequest The update request object.
   */
  static create(config: DistributedFirewallLayer3Json)
    : DistributedFirewallLayer3UpdateRequest {
    const req: DistributedFirewallLayer3UpdateRequestJson = {
      rules: config.rules,
      name: config.name,
      stateless: config.stateless,
      tcp_strict: config.tcp_strict,
      use_sid: config.use_sid
    };
    return new DistributedFirewallLayer3UpdateRequest(req);
  }
}
