import nodeFetch, { RequestInfo, RequestInit } from 'node-fetch';
import { Fetch } from './types';

export const get = async <TResponse>(
  url: RequestInfo,
  init?: RequestInit,
): Promise<TResponse> => {
  const response = await nodeFetch(url, {
    ...init,
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
};

export const fetch: Fetch = {
  get,
};
