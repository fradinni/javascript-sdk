import { Logging } from './logging';
import { IpPrefix } from './ip-prefix';
import { RoutingGlobalConfigUpdateRequestJson } from './__json__/routing-global-config-update-request-json';
import { IpPrefixJson } from './__json__/ip-prefix-json';
import { LoggingJson } from './__json__/logging-json';

/**
 * Routing Global Configuration Update Request
 */
/* istanbul ignore next: autogenerated */
export class RoutingGlobalConfigUpdateRequest {

  private readonly _json: RoutingGlobalConfigUpdateRequestJson;

  constructor(routingGlobalConfigUpdateRequest: RoutingGlobalConfigUpdateRequest);
  constructor(routingGlobalConfigUpdateRequestJson: RoutingGlobalConfigUpdateRequestJson);
  constructor(routerId: string, ecmp: boolean, logging: LoggingJson, ipPrefixes: Array<IpPrefixJson>);
  constructor(firstParam: string | RoutingGlobalConfigUpdateRequest | RoutingGlobalConfigUpdateRequestJson,
              ecmp?: boolean, logging?: LoggingJson, ipPrefixes?: Array<IpPrefixJson>) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        router_id: firstParam,
        ecmp: ecmp,
        logging: logging,
        ip_prefixes: ipPrefixes
      } as RoutingGlobalConfigUpdateRequestJson;
    } else if (firstParam instanceof RoutingGlobalConfigUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as RoutingGlobalConfigUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as RoutingGlobalConfigUpdateRequestJson;
    }
  }

  /**
   * Get router id.
   * @returns {string}
   */
  get routerId(): string {
    return this._json.router_id;
  }

  /**
   * Get ecmp.
   * @returns {boolean}
   */
  get ecmp(): boolean {
    return this._json.ecmp;
  }

  /**
   * Get logging.
   * @returns {Logging}
   */
  get logging(): Logging {
    return new Logging(this._json.logging);
  }

  /**
   * Get ip prefixes.
   * @returns {Array<IpPrefix>}
   */
  get ipPrefixes(): Array<IpPrefix> {
    return this._json.ip_prefixes.map(it => new IpPrefix(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {RoutingGlobalConfigUpdateRequestJson}
   */
  get json(): RoutingGlobalConfigUpdateRequestJson {
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
