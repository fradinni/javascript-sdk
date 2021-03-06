import { BackupGroupStorageMetricListJson } from './__json__/backup-group-storage-metric-list-json';
import { BackupGroupStorageMetric } from './__json__/backup-group-storage-metric';

/**
 * Backup group storage metric list.
 */
/* istanbul ignore next: autogenerated */
export class BackupGroupStorageMetricList {

  constructor(private _json: BackupGroupStorageMetricListJson) {
  }

  /**
   * Get data.
   * @returns {Array<BackupGroupStorageMetric>}
   */
  get data(): Array<BackupGroupStorageMetric> {
    return this._json.data;
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupGroupStorageMetricListJson}
   */
  get json(): BackupGroupStorageMetricListJson {
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
