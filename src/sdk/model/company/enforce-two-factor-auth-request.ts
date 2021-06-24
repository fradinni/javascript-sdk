import { EnforceTwoFactorAuthRequestJson } from './__json__/enforce-two-factor-auth-request-json';

/**
 * Enforce Two Factor Auth Request.
 * - To apply 2FA to all users, set 'allUsers' to true and set 'roles' to null or empty.
 * - To apply 2FA to specific roles, set 'allUsers' to false and fill 'roles' with role uuids.
 */
/* istanbul ignore next: autogenerated */
export class EnforceTwoFactorAuthRequest {
  private readonly _json: EnforceTwoFactorAuthRequestJson;

  constructor(enforceTwoFactorAuthRequest: EnforceTwoFactorAuthRequest);
  constructor(enforceTwoFactorAuthRequestJson: EnforceTwoFactorAuthRequestJson);
  constructor(allUsers: boolean, roles: Array<String>);
  constructor(firstParam: boolean | EnforceTwoFactorAuthRequest | EnforceTwoFactorAuthRequestJson,
              roles?: Array<String>) {
    if (typeof firstParam === 'boolean') {
      // Parameters constructor
      this._json = {
        all_users: firstParam,
        roles: roles
      } as EnforceTwoFactorAuthRequestJson;
    } else if (firstParam instanceof EnforceTwoFactorAuthRequest) {
      // Copy constructor
      this._json = (firstParam as EnforceTwoFactorAuthRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as EnforceTwoFactorAuthRequestJson;
    }
  }

  /**
   * Get all users.
   * @returns {boolean}
   */
  get allUsers(): boolean {
    return this._json.all_users;
  }

  /**
   * Get roles.
   * @returns {Array<String>}
   */
  get roles(): Array<String> {
    return this._json.roles || [];
  }

  /**
   * Get the json representation of this class.
   * @returns {EnforceTwoFactorAuthRequestJson}
   */
  get json(): EnforceTwoFactorAuthRequestJson {
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