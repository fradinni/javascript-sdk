import { EntityJson } from './entity';
import { IpRangeJson } from './ip-range';

/**
 * Interface for abstract Network JSON properties.
 */
export interface AbstractNetworkJson extends EntityJson {
  location_id: string;
  org_uuid: string;
  vdc_uuid: string;
  description: string;
  primary_dns: string;
  secondary_dns: string;
  dns_suffix: string;
  fence_mode: NetworkFenceMode;
  gateway: string;
  netmask: string;
  ip_ranges: Array<IpRangeJson>;
  inherited: boolean;
  parent_network_uuid: string | null;
}

/**
 * Enumeration of possible Network fence mode options.
 */
export type NetworkFenceMode = 'NATROUTED' | 'BRIDGED' | 'ISOLATED';