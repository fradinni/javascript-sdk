import { BackupPolicyScopeType } from './__json__/backup-policy-scope-type';
import { BackupPolicyJson } from './__json__/backup-policy-json';
import { BlackoutPeriod } from './blackout-period';
import { ExtendedRetentionPolicy } from './extended-retention-policy';
import { SchedulingPolicy } from './scheduling-policy';
import { SnapshotArchivalCopyPolicy } from './snapshot-archival-copy-policy';
import { SnapshotReplicationCopyPolicy } from './snapshot-replication-copy-policy';

/**
 * Backup Policy.
 */
/* istanbul ignore next: autogenerated */
export class BackupPolicy {

  constructor(private _json: BackupPolicyJson) {
  }

  /**
   * Get scope.
   * @returns {BackupPolicyScopeType}
   */
  get scope(): BackupPolicyScopeType {
    return this._json.scope;
  }

  /**
   * Get blackout periods.
   * @returns {Array<BlackoutPeriod>}
   */
  get blackoutPeriods(): Array<BlackoutPeriod> {
    return this._json.blackout_periods?.map(it => new BlackoutPeriod(it));
  }

  /**
   * Get days to keep.
   * @returns {number}
   */
  get daysToKeep(): number {
    return this._json.days_to_keep;
  }

  /**
   * Get days to keep log.
   * @returns {number | null}
   */
  get daysToKeepLog(): number | null {
    return this._json.days_to_keep_log || null;
  }

  /**
   * Get description.
   * @returns {string | null}
   */
  get description(): string | null {
    return this._json.description || null;
  }

  /**
   * Get extended retention policies.
   * @returns {Array<ExtendedRetentionPolicy>}
   */
  get extendedRetentionPolicies(): Array<ExtendedRetentionPolicy> {
    return this._json.extended_retention_policies?.map(it => new ExtendedRetentionPolicy(it));
  }

  /**
   * Get full scheduling policy.
   * @returns {SchedulingPolicy | null}
   */
  get fullSchedulingPolicy(): SchedulingPolicy | null {
    return this._json.full_scheduling_policy
      ? new SchedulingPolicy(this._json.full_scheduling_policy)
      : null;
  }

  /**
   * Get uid.
   * @returns {string}
   */
  get uid(): string {
    return this._json.uid;
  }

  /**
   * Get incremental scheduling policy.
   * @returns {SchedulingPolicy}
   */
  get incrementalSchedulingPolicy(): SchedulingPolicy {
    return new SchedulingPolicy(this._json.incremental_scheduling_policy);
  }

  /**
   * Get last modified time msecs.
   * @returns {number | null}
   */
  get lastModifiedTimeMsecs(): number | null {
    return this._json.last_modified_time_msecs ?? null;
  }

  /**
   * Get log scheduling policy.
   * @returns {SchedulingPolicy | null}
   */
  get logSchedulingPolicy(): SchedulingPolicy | null {
    return this._json.log_scheduling_policy
      ? new SchedulingPolicy(this._json.log_scheduling_policy)
      : null;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get retries.
   * @returns {number}
   */
  get retries(): number {
    return this._json.retries;
  }

  /**
   * Get retry interval mins.
   * @returns {number}
   */
  get retryIntervalMins(): number {
    return this._json.retry_interval_mins;
  }

  /**
   * Get skip interval mins.
   * @returns {number | null}
   */
  get skipIntervalMins(): number | null {
    return this._json.skip_interval_mins ?? null;
  }

  /**
   * Get snapshot archival copy policies.
   * @returns {Array<SnapshotArchivalCopyPolicy>}
   */
  get snapshotArchivalCopyPolicies(): Array<SnapshotArchivalCopyPolicy> {
    return this._json.snapshot_archival_copy_policies?.map(it => new SnapshotArchivalCopyPolicy(it));
  }

  /**
   * Get snapshot replication copy policies.
   * @returns {Array<SnapshotReplicationCopyPolicy>}
   */
  get snapshotReplicationCopyPolicies(): Array<SnapshotReplicationCopyPolicy> {
    return this._json.snapshot_replication_copy_policies?.map(it => new SnapshotReplicationCopyPolicy(it));
  }

  /**
   * Get location id.
   * @returns {string}
   */
  get locationId(): string {
    return this._json.location_id;
  }

  /**
   * Get org uuid.
   * @returns {string}
   */
  get orgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Get company id.
   * @returns {string}
   */
  get companyId(): string {
    return this._json.company_id;
  }

  /**
   * Get vdc uuid.
   * @returns {string | null}
   */
  get vdcUuid(): string | null {
    return this._json.vdc_uuid || null;
  }

  /**
   * Get the json representation of this class.
   * @returns {BackupPolicyJson}
   */
  get json(): BackupPolicyJson {
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