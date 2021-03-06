import { TaskListJson } from './__json__/task-page-json';
import { Task } from './task';
import { TaskFilterParams } from './task-filter-params';

/**
 * Task List.
 */
/* istanbul ignore next: autogenerated */
export class TaskList {

  constructor(private _json: TaskListJson) {
  }

  /**
   * Get current page parameters.
   * @returns {TaskFilterParams}
   */
  get currentPageParameters(): TaskFilterParams {
    return new TaskFilterParams(this._json.current_page_parameters);
  }

  /**
   * Get next page parameters.
   * @returns {TaskFilterParams}
   */
  get nextPageParameters(): TaskFilterParams {
    return new TaskFilterParams(this._json.next_page_parameters);
  }

  /**
   * Get total records.
   * @returns {number}
   */
  get totalRecords(): number {
    return this._json.total_records;
  }

  /**
   * Get last page.
   * @returns {boolean}
   */
  get lastPage(): boolean {
    return this._json.last_page;
  }

  /**
   * Get data.
   * @returns {Array<TaskJson>}
   */
  get data(): Array<Task> {
    return this._json.data.map(it => new Task(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {TaskListJson}
   */
  get json(): TaskListJson {
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
