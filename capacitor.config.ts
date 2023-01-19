import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "pg.weather.app",
  appName: "PG Weather App",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "192.168.1.131:3000",
    cleartext: true,
  },
};

export default config;
