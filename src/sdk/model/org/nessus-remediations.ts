import { NessusRemediationsJson } from './__json__/nessus-remediations-json';
import { NessusRemediation } from './nessus-remediation';

/**
 * Nessus Remediations.
 */
/* istanbul ignore next: autogenerated */
export class NessusRemediations {

  constructor(private _json: NessusRemediationsJson) {
  }

  /**
   * Get remediations.
   * @returns {Array<NessusRemediationJson>}
   */
  get remediations(): Array<NessusRemediation> {
    return this._json.remediations.map(it => new NessusRemediation(it));
  }

  /**
   * Get num hosts.
   * @returns {number}
   */
  get numHosts(): number {
    return this._json.num_hosts;
  }

  /**
   * Get num cves.
   * @returns {number}
   */
  get numCves(): number {
    return this._json.num_cves;
  }

  /**
   * Get num impacted hosts.
   * @returns {number}
   */
  get numImpactedHosts(): number {
    return this._json.num_impacted_hosts;
  }

  /**
   * Get num remediated cves.
   * @returns {number}
   */
  get numRemediatedCves(): number {
    return this._json.num_remediated_cves;
  }

  /**
   * Get the json representation of this class.
   * @returns {NessusRemediationsJson}
   */
  get json(): NessusRemediationsJson {
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
