export interface IIpInfo {
  asn: any;
  company: any;
  elapsed_ms: number;
  ip: string;
  is_abuser: boolean;
  is_bogon: boolean;
  is_datacenter: boolean;
  is_mobile: boolean;
  is_proxy: boolean;
  is_tor: boolean;
  is_vpn: boolean;
  location: {
    city: string;
    continent: string;
    country: string;
    country_code: string;
    is_dst: false;
    latitude: number;
    local_time: string;
    local_time_unix: number;
    longitude: number;
    state: string;
    timezone: string;
    zip: string;
  };
  rir: string;
}
