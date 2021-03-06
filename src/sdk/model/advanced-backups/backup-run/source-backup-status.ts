import { ProtectionSource } from '../backup-group/protection-source';
import { BackupSourceStats } from './backup-source-stats';
import { SourceBackupStatusJson } from './__json__/source-backup-status-json';
import { StatusSourceBackupStatus } from './__json__/status-source-backup-status';

/**
 * Source Backup Status.
 */
/* istanbul ignore next: autogenerated */
export class SourceBackupStatus {

  constructor(private _json: SourceBackupStatusJson) {
  }

  /**
   * Get error.
   * Specifies if an error occurred (if any) while running this task.
   * This field is populated when the status is equal to 'FAILURE'.
   * @returns {string | null}
   */
  get error(): string | null {
    return this._json.error || null;
  }

  /**
   * Get is full backup.
   * @returns {boolean}
   */
  get isFullBackup(): boolean {
    return this._json.is_full_backup;
  }

  /**
   * Get num restarts.
   * @returns {number}
   */
  get numRestarts(): number {
    return this._json.num_restarts;
  }

  /**
   * Get quiesced.
   * @returns {boolean}
   */
  get quiesced(): boolean {
    return this._json.quiesced;
  }

  /**
   * Get sla violated.
   * @returns {boolean}
   */
  get slaViolated(): boolean {
    return this._json.sla_violated;
  }

  /**
   * Get source.
   * @returns {ProtectionSource}
   */
  get source(): ProtectionSource {
    return new ProtectionSource(this._json.source);
  }

  /**
   * Get stats.
   * @returns {BackupSourceStats}
   */
  get stats(): BackupSourceStats {
    return new BackupSourceStats(this._json.stats);
  }

  /**
   * Get status.
   * @returns {StatusSourceBackupStatus}
   */
  get status(): StatusSourceBackupStatus {
    return this._json.status;
  }

  /**
   * Get warnings.
   * @returns {Array<string>}
   */
  get warnings(): Array<string> {
    return this._json.warnings;
  }

  /**
   * Get the json representation of this class.
   * @returns {SourceBackupStatusJson}
   */
  get json(): SourceBackupStatusJson {
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
