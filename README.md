## Tech 🛠

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Capacitor](https://capacitorjs.com/)
- [Ionic Framework](https://ionicframework.com/)
- [Tailwind CSS](https://tailwindcss.com)
- [Recoil](https://recoiljs.org/)

## Features ✨

- See current, hourly & daily forecast in your current location
- See min/max. temperatur, humidity, pressure and wind speed
- Search weather forecast of any city, region or country

## Notes 📝

- Language in Danish 🇩🇰
- OpenWeatherMap API

## Development 💻

Here are the steps to run the project locally.

1. Clone the repository

   ```bash
   git clone https://github.com/smartercow/weather-app.git
   ```

2. Install dependencies

   ```bash
   npm i
   ```

3. Create build directory

   > It will create an /out folder in your root directory, which includes the required index.html for Capacitor

   ```bash
   npm run static
   ```

4. Add your local server IP address with port in the capacitor.config.ts
   <br />

   > It should look something like this = url: "123.456.7.890:3000"

   <br />
   To get your local IP address on Windows run:

   ```bash
   ipconfig /all
   ```

   Or on Mac:

   ```bash
   ipconfig getifaddr en0
   ```

5. Execute Android platform

   ```bash
   npx cap add android
   ```

6. Open project in Android Studio

   ```bash
   npx cap open android
   ```

7. Sync the project - for live reload & gradle changes
   <br />
   First:

   ```bash
   npx cap sync
   ```

   Second:

   ```bash
   npx cap sync android
   ```

8. Run the project

   ```bash
   npm run dev
   ```

9. Open the project in your Android emulator and you set to go :+1:
