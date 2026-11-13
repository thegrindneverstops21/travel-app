# Roama

*Find your next somewhere.*

A mobile travel UI built with Expo, React Native, and TypeScript. The current screen highlights Rio de Janeiro with destination photography, a city overview, and a horizontal collection of upcoming tours.

Roama is the working name; the Expo project is currently configured as `rn-ui-challenge`.

## Project link

[View the shared file on Google Drive](https://drive.google.com/file/d/1sPVHLlaRvbTD7uGLczLEzUXqZkX8thDT/view?usp=drive_link).

## Features

- Full-width destination photo with floating back and favorite buttons.
- Rounded destination panel with country, rating, and review count.
- Expandable description using **Read more** and **Show less**.
- Swipeable cards for Iconic Brazil, Beach Escape, and Amazon Trail.
- Local photos bundled with the app.
- Favorite toggles for the destination and individual tours.

This is a UI prototype with sample tour data. Favorites stay in component state and reset when the app restarts. Booking, reviews, **See all**, and back navigation are not connected yet.

## Get started

Install Node.js and npm, then run from the project directory:

```sh
npm ci
npm start
```

Use the Expo development server's prompts to open the app on a compatible device or emulator.

### Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Start Expo and open Android |
| `npm run ios` | Start Expo and open the iOS simulator (requires macOS) |
| `npm run web` | Start Expo for web (requires the web dependencies) |
| `npx tsc --noEmit` | Check TypeScript types |
| `npx expo lint` | Run Expo's lint workflow |
| `npx expo-doctor` | Diagnose project configuration and dependencies |

## Project structure

```text
App.tsx          Destination screen and sample tour data
index.ts         Expo entry point
components/      Reusable text, buttons, cards, links, and ratings
theme/           Shared colors and sizing helpers
assets/          Local destination and tour photos
app.json         Expo app configuration
eas.json         Development, preview, and production build profiles
```

## Photos

| Asset | Used for |
| --- | --- |
| `assets/rio.jpg` | Destination header |
| `assets/iconic.jpg` | Iconic Brazil tour |
| `assets/beach.jpg` | Beach Escape tour |
| `assets/amazon.jpg` | Amazon Trail tour |

Replace these files to change the photos, or update the static `require()` references in `App.tsx`. Tour cards accept React Native image sources through the `Tour` type in `components/TourCard.tsx`.

## Current setup notes

- The project uses Expo SDK 58, React Native 0.88, and React 19.3.
- Type checking currently reports unsupported `StatusBar` props in `App.tsx`.
- ESLint is not configured yet. The initial `npx expo lint` setup requires network access to install its dependencies.
- `app.json` references app icon and favicon files that are not currently in `assets/`; supply those images or update the configuration before building.

## License

See [LICENSE](LICENSE).
