import { HygieneService } from "./hygiene/types";
import { Fetch } from '~utils/fetch/types';

export interface ServicesOptions {
  fetch: Fetch;
  endpoint: string;
}

export interface Services {
  hygiene: HygieneService;
}
