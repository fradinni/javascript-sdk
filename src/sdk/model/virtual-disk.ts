import { ApiVirtualDisk, VirtualDiskType } from './api-spec/api-virtual-disk';

/**
 * Virtual Disk.
 */
export class VirtualDisk {

  constructor(private _apiDisk: ApiVirtualDisk) {
  }

  /**
   * Gets the name of the virtual disk.
   * @returns {string} the name
   */
  getName(): string {
    return this._apiDisk.name;
  }

  /**
   * Gets the size of the virtual disk in MB.
   * @returns {number} size in MB
   */
  getSize(): number {
    return this._apiDisk.size;
  }

  /**
   * Gets the Virtual Hard Disk type.
   * @returns {VirtualDiskType} the type
   */
  getType(): VirtualDiskType {
    return this._apiDisk.type;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._apiDisk, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {ApiVirtualDisk} the API virtual disk object
   */
  getJson(): ApiVirtualDisk {
    return Object.assign({}, this._apiDisk);
  }

}
