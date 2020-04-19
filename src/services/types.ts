import fetch from "node-fetch";
import { HygieneService } from "./hygiene/types";

export interface ServicesOptions {
  fetch: typeof fetch;
  endpoint: string;
}

export interface Services {
  hygiene: HygieneService;
}
