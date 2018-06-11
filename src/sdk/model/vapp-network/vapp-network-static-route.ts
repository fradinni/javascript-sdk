import { VappNetworkStaticRouteJson } from './__json__';

/* istanbul ignore next: autogenerated */
export class VappNetworkStaticRoute {

  constructor(private _json: VappNetworkStaticRouteJson) {
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get network.
   * @returns {string}
   */
  get network(): string {
    return this._json.network;
  }

  /**
   * Get next hop i p.
   * @returns {string}
   */
  get nextHopIP(): string {
    return this._json.next_hop_i_p;
  }

  /**
   * Get the json representation of this class.
   * @returns {VappNetworkStaticRouteJson}
   */
  get json(): VappNetworkStaticRouteJson {
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