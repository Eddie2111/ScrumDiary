export const HEALTH_OK_MESSAGE = "Health Ok";
export const HEALTH_ERROR_MESSAGE = "Health Error";

export const APP_VERSION = "1.0.0";

export const APP_PORT = 3000;

export const APP_ENV = process.env.NODE_ENV || "development";

export const APP_LOG_LEVEL = process.env.APP_LOG_LEVEL || "info";

export const APP_API_VERSION = "v1";

export const APP_URL = `http://localhost:${APP_PORT}/api/${APP_API_VERSION}`;
