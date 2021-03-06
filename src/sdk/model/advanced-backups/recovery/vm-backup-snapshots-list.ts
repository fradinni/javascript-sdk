import { VmBackupSnapshotsListJson } from './__json__/vm-backup-snapshots-list-json';
import { VmBackupSnapshot } from './vm-backup-snapshot';

/**
 * VM Backup Snapshots List.
 */
/* istanbul ignore next: autogenerated */
export class VmBackupSnapshotsList {

  constructor(private _json: VmBackupSnapshotsListJson) {
  }

  /**
   * Get data.
   * @returns {Array<VmBackupSnapshot>}
   */
  get data(): Array<VmBackupSnapshot> {
    return this._json.data.map(it => new VmBackupSnapshot(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {VmBackupSnapshotsListJson}
   */
  get json(): VmBackupSnapshotsListJson {
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
