import { Fetch } from '#/utils/fetch/types';
import { HygieneService } from "./hygiene/types";

export interface ServicesOptions {
  fetch: Fetch;
  endpoint: string;
}

export interface Services {
  hygiene: HygieneService;
}
