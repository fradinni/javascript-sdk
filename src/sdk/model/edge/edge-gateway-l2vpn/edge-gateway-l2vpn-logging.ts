import { LogLevelType } from '../../common/__json__/log-level-type';
import { EdgeGatewayL2VpnLoggingJson } from './__json__/edge-gateway-l2vpn-logging-json';

/* istanbul ignore next: autogenerated */
export class EdgeGatewayL2VpnLogging {

  constructor(private _json: EdgeGatewayL2VpnLoggingJson) {
  }

  /**
   * Get enable.
   * @returns {boolean}
   */
  get enable(): boolean {
    return this._json.enable;
  }

  /**
   * Get log level.
   * @returns {LogLevelType}
   */
  get logLevel(): LogLevelType {
    return this._json.log_level;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayL2VpnLoggingJson}
   */
  get json(): EdgeGatewayL2VpnLoggingJson {
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
