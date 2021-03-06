import { VappIntegratedBackupStatus } from './vapp-integrated-backup-status';
import { VappIntegratedBackupStatusDetailJson } from './__json__/vapp-integrated-backup-status-detail-json';

/**
 * vApp Integrated Backup Status Detail.
 */
/* istanbul ignore next: autogenerated */
export class VappIntegratedBackupStatusDetail extends VappIntegratedBackupStatus {

  constructor(private _json: VappIntegratedBackupStatusDetailJson) {
    super(_json);
  }

  /**
   * Get whether the vApp belongs to a vDC that has the integrated backups offering.
   * @returns {boolean}
   */
  get hasIntegratedBackups(): boolean {
    return this._json.has_integrated_backups;
  }

  /**
   * Get the json representation of this class.
   * @returns {VappIntegratedBackupStatusDetailJson}
   */
  get json(): VappIntegratedBackupStatusDetailJson {
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
