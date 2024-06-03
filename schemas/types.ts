export interface Container {
  name: string;
  hostname: string;
  state: string;
  running: boolean;
  ipaddress: string;
  image: string;
  user: string;
}
