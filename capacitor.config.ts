import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "pg-weather-app",
  appName: "PG Weather App",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: process.env.NEXT_PUBLIC_URL || "",
    cleartext: true,
  },
};

export default config;
