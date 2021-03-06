import { ApplicationGroupMemberJson } from './application-group-member-json';

/**
 * Application Group JSON
 */
export interface ApplicationGroupJson {
  object_id: string;
  name: string;
  inheritance_allowed: boolean;
  members: Array<ApplicationGroupMemberJson>;
}
