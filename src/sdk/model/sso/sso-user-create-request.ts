import { SsoUserCreateRequestJson } from './__json__/sso-user-create-request-json';

/* istanbul ignore next: autogenerated */
export class SsoUserCreateRequest {

  private readonly _json: SsoUserCreateRequestJson;

  constructor(ssoUserCreateRequest: SsoUserCreateRequest);
  constructor(ssoUserCreateRequestJson: SsoUserCreateRequestJson);
  constructor(firstParam: SsoUserCreateRequest | SsoUserCreateRequestJson) {
    if (firstParam instanceof SsoUserCreateRequest) {
      // Copy constructor
      this._json = (firstParam as SsoUserCreateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as SsoUserCreateRequestJson;
    }
  }

  /**
   * Get email.
   * @returns {string}
   */
  get email(): string {
    return this._json.email;
  }

  /**
   * Get domain.
   * @returns {string}
   */
  get domain(): string {
    return this._json.domain;
  }

  /**
   * Get fullname.
   * @returns {string}
   */
  get fullname(): string {
    return this._json.fullname;
  }

  /**
   * Get role uuid.
   * @returns {string | undefined}
   */
  get roleUuid(): string | undefined {
    return this._json.role_uuid;
  }

  /**
   * Get send invitation.
   * @returns {boolean}
   */
  get sendInvitation(): boolean {
    return this._json.send_invitation;
  }

  /**
   * Get the json representation of this class.
   * @returns {SsoUserCreateRequestJson}
   */
  get json(): SsoUserCreateRequestJson {
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
