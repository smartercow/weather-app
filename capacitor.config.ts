import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "pg.weather.app",
  appName: "PG Weather App",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "http://84.238.25.55:3000",
    cleartext: true,
  },
};

export default config;
