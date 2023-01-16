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

.3 Add the required index.html for Ionic

```bash
 npm run static
```

It will create an /out folder in your root directory, which includes the required index.html for Capacitor

4. Execute android platform

```bash
 npx cap add android
```

5. Open Android Studio

```bash
 npx cap open android
```

6. Sync the project - live reload & changes
   First:

```bash
 npx cap sync
```

Second:

```bash
 npx cap sync android
```
