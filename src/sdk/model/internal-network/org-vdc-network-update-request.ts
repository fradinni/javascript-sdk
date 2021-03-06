import {
  OrgVdcNetworkUpdateFenceMode,
  OrgVdcNetworkUpdateRequestJson
} from './__json__/org-vdc-network-update-request-json';
import { IpScopeJson } from './__json__/ip-scope-json';
import { IpScope } from './ip-scope';

/**
 * Org vDC Network Update Request.
 */
/* istanbul ignore next: autogenerated */
export class OrgVdcNetworkUpdateRequest {

  private readonly _json: OrgVdcNetworkUpdateRequestJson;

  constructor(orgVdcNetworkUpdateRequest: OrgVdcNetworkUpdateRequest);
  constructor(orgVdcNetworkUpdateRequestJson: OrgVdcNetworkUpdateRequestJson);
  constructor(uuid: string, name: string, description: string, edgeUuid: string, shared: boolean,
              fenceMode: OrgVdcNetworkUpdateFenceMode, ipScope: IpScopeJson);
  constructor(firstParam: string | OrgVdcNetworkUpdateRequest | OrgVdcNetworkUpdateRequestJson, name?: string,
              description?: string, edgeUuid?: string, shared?: boolean, fenceMode?: OrgVdcNetworkUpdateFenceMode,
              ipScope?: IpScopeJson) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        uuid: firstParam,
        name: name,
        description: description,
        edge_uuid: edgeUuid,
        shared: shared,
        fence_mode: fenceMode,
        ip_scope: ipScope
      } as OrgVdcNetworkUpdateRequestJson;
    } else if (firstParam instanceof OrgVdcNetworkUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as OrgVdcNetworkUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as OrgVdcNetworkUpdateRequestJson;
    }
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get edge uuid.
   * @returns {string}
   */
  get edgeUuid(): string {
    return this._json.edge_uuid;
  }

  /**
   * Get shared.
   * @returns {boolean}
   */
  get shared(): boolean {
    return this._json.shared;
  }

  /**
   * Get fence mode.
   * @returns {OrgVdcNetworkUpdateFenceMode}
   */
  get fenceMode(): OrgVdcNetworkUpdateFenceMode {
    return this._json.fence_mode;
  }

  /**
   * Get ip scope.
   * @returns {IpScope}
   */
  get ipScope(): IpScope {
    return new IpScope(this._json.ip_scope);
  }

  /**
   * Get the json representation of this class.
   * @returns {OrgVdcNetworkUpdateRequestJson}
   */
  get json(): OrgVdcNetworkUpdateRequestJson {
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
