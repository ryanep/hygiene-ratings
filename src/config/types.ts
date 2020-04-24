export interface Config {
  api: ApiConfig;
  app: AppConfig;
}

export interface ApiConfig {
  API_ENDPOINT: string;
}

export interface AppConfig {
  APP_PORT: number;
}
