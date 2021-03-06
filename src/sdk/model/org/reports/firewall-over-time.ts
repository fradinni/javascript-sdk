import { FirewallOverTimeSample } from './firewall-over-time-sample';
import { FirewallOverTimeJson } from './__json__/firewall-over-time-json';
import { SerieType } from './__json__/serie-type';

/* istanbul ignore next: autogenerated */
export class FirewallOverTime {

  constructor(private _json: FirewallOverTimeJson) {
  }

  /**
   * Get org uuid.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get type.
   * @returns {SerieType}
   */
  get type(): SerieType {
    return this._json.type;
  }

  /**
   * Get samples.
   * @returns {Array<FirewallOverTimeSample>}
   */
  get samples(): Array<FirewallOverTimeSample> {
    return this._json.samples.map((sample) => { return new FirewallOverTimeSample(sample); });
  }

  /**
   * Get the json representation of this class.
   * @returns {FirewallOverTimeJson}
   */
  get json(): FirewallOverTimeJson {
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
