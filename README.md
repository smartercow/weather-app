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
- Search forecast of any city, region or country

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

3. Add the required static folder for Capacitor

```bash
 npm run static
```

It will create an /out folder in your root directory, which includes the required index.html for Capacitor

4. Add your local server IP address the environment variable sample and rename it to .env.local
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
   First:

```bash
 npx cap sync
```

Second:

```bash
 npx cap sync android
```
