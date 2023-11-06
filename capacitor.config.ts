import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'french-fries-friday',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
