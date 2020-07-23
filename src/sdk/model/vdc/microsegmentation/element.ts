import { ElementJson } from './__json__/element-json';

/**
 * Element
 */
/* istanbul ignore next: autogenerated */
export class Element {

  constructor(private _json: ElementJson) {
  }

  /**
   * Get application protocol.
   * @returns {string | undefined}
   */
  get applicationProtocol(): string | undefined {
    return this._json.application_protocol || undefined;
  }

  /**
   * Get value.
   * @returns {string | undefined}
   */
  get value(): string | undefined {
    return this._json.value || undefined;
  }

  /**
   * Get source port.
   * @returns {string | undefined}
   */
  get sourcePort(): string | undefined {
    return this._json.source_port || undefined;
  }

  /**
   * Get the json representation of this class.
   * @returns {ElementJson}
   */
  get json(): ElementJson {
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