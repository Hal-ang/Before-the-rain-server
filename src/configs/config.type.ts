export type AppConfig = {
  mode: string;
  appName: string;
  keyPem: string;
  certPem: string;
};

export type AppConfigType = {
  app: AppConfig;
};
