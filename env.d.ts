declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PROJECT_ID: string;
      BUNDLE_IDENTIFIER: string;
      OWNER: string;
      UPDATES_URL: string;
    }
  }
}

export {};
