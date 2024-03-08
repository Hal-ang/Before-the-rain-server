export type AppConfig = {
  mode: string;
  appName: string;
  keyPem: string;
  certPem: string;
  dbHost: string;
  dbPort: number;
  dbUsername: string;
  dbPassword: string;
  dbName: string;
};

export type AppConfigType = {
  app: AppConfig;
};
