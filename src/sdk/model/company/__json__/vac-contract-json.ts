import { SalesforceSubscriptionJson } from './sales-force-subscription-json';

/* istanbul ignore next: autogenerated */
export interface VacContractJson {
  uuid: string;
  status: string;
  start: number;
  end: number;
  term: number;
  last_mod: number;
  created: number;
  activated: number;
  cancellation_date: number;
  status_code: string;
  group: string;
  test_drive: boolean;
  discount: number;
  subscriptions: Array<SalesforceSubscriptionJson>;
}