import { BaJobJson } from './__json__/ba-job';

/* istanbul ignore next: autogenerated */
export class BaJob {

  constructor(private _json: BaJobJson) {
  }

  /**
   * Get id.
   * @returns {string}
   */
  get id(): string {
    return this._json.id;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get status.
   * @returns {string}
   */
  get status(): string {
    return this._json.status;
  }

  /**
   * Get type.
   * @returns {string}
   */
  get type(): string {
    return this._json.type;
  }

  /**
   * Get last run.
   * @returns {Date | null}
   */
  get lastRun(): Date | null {
    return this._json.last_run ? new Date(this._json.last_run) : null;
  }

  /**
   * Get end time.
   * @returns {Date | null}
   */
  get endTime(): Date | null {
    return this._json.end_time ? new Date(this._json.end_time) : null;
  }

  /**
   * Get duration.
   * @returns {number}
   */
  get duration(): number {
    return this._json.duration;
  }

  /**
   * Get procession rate.
   * @returns {number}
   */
  get processionRate(): number {
    return this._json.procession_rate;
  }

  /**
   * Get avg duration.
   * @returns {number}
   */
  get avgDuration(): number {
    return this._json.avg_duration;
  }

  /**
   * Get transferred data.
   * @returns {number}
   */
  get transferredData(): number {
    return this._json.transferred_data;
  }

  /**
   * Get bottleneck.
   * @returns {string}
   */
  get bottleneck(): string {
    return this._json.bottleneck;
  }

  /**
   * Get server name.
   * @returns {string}
   */
  get serverName(): string {
    return this._json.server_name;
  }

  /**
   * Get is enabled.
   * @returns {boolean}
   */
  get isEnabled(): boolean {
    return this._json.is_enabled;
  }

  /**
   * Get protected vms.
   * @returns {number}
   */
  get protectedVms(): number {
    return this._json.protected_vms;
  }

  /**
   * Get scheduling type.
   * @returns {string}
   */
  get schedulingType(): string {
    return this._json.scheduling_type;
  }

  /**
   * Get company id.
   * @returns {number}
   */
  get companyId(): number {
    return this._json.company_id;
  }

  /**
   * Get location id.
   * @returns {number}
   */
  get locationId(): number {
    return this._json.location_id;
  }

  /**
   * Get the json representation of this class.
   * @returns {BaJobJson}
   */
  get json(): BaJobJson {
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
