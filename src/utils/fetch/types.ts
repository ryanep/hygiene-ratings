import { RequestInfo, RequestInit } from 'node-fetch';

export interface Fetch {
  get: <TResponse>(url: RequestInfo, init?: RequestInit) => Promise<TResponse>;
}
