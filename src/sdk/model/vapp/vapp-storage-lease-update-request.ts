import { StorageLeaseUpdateRequestJson } from './__json__/vapp-storage-lease-update-request-json';

/**
 * Request to update a vApp storage lease.
 */
/* istanbul ignore next: autogenerated */
export class StorageLeaseUpdateRequest {

  private readonly _json: StorageLeaseUpdateRequestJson;

  constructor(storageLeaseUpdateRequest: StorageLeaseUpdateRequest);
  constructor(storageLeaseUpdateRequestJson: StorageLeaseUpdateRequestJson);
  constructor(expirationInSeconds: number);
  constructor(firstParam: number | StorageLeaseUpdateRequest | StorageLeaseUpdateRequestJson) {
    if (typeof firstParam === 'number') {
      // Parameters constructor
      this._json = {
        expiration_in_seconds: firstParam
      } as StorageLeaseUpdateRequestJson;
    } else if (firstParam instanceof StorageLeaseUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as StorageLeaseUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as StorageLeaseUpdateRequestJson;
    }
  }

  /**
   * Get expiration in seconds.
   * @returns {number}
   */
  get expirationInSeconds(): number {
    return this._json.expiration_in_seconds;
  }

  /**
   * Get the json representation of this class.
   * @returns {StorageLeaseUpdateRequestJson}
   */
  get json(): StorageLeaseUpdateRequestJson {
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
