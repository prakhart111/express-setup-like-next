export type ConfigType = {
  PORT: number;
  logs: {
    morgan: string;
  };
  MONGO_URI: string;
  API_BASE_URL: string;
};
