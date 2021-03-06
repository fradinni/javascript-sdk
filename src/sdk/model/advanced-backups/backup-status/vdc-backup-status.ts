import { VappBackupStatus } from './vapp-backup-status';
import { BackupGroupStatusDescriptor } from './backup-group-status-descriptor';
import { VdcBackupStatusJson } from './__json__/vdc-backup-status-json';

/**
 * vDC Backup Status.
 */
/* istanbul ignore next: autogenerated */
export class VdcBackupStatus {

  constructor(private _json: VdcBackupStatusJson) {
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get backup groups.
   * @returns {Array<BackupGroupStatusDescriptor>}
   */
  get backupGroups(): Array<BackupGroupStatusDescriptor> {
    return this._json.backup_groups.map(it => new BackupGroupStatusDescriptor(it));
  }

  /**
   * Get child vApp statuses.
   * @returns {Array<VappBackupStatus>}
   */
  get childVAppStatuses(): Array<VappBackupStatus> {
    return this._json.child_vapp_statuses.map(it => new VappBackupStatus(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {VdcBackupStatusJson}
   */
  get json(): VdcBackupStatusJson {
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
