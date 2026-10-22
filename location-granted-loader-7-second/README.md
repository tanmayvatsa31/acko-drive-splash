# Location Granted Loader 7 Second

ADSC New Booking Flow screens from Figma:

- [7 Second Loader](https://www.figma.com/design/yMwMrWWlLlS1LkLAnAb5Vu/ADSC-New-Booking-Flow?node-id=2209-20662)
- [Location Permission given](https://www.figma.com/design/yMwMrWWlLlS1LkLAnAb5Vu/ADSC-New-Booking-Flow?node-id=2218-22282)

## Local preview

```bash
npm install --registry https://registry.npmjs.org
npm run dev
```

Open http://localhost:5173/

Preview tabs:

- **Auto flow (7s)** — loader, then location granted after 7 seconds
- **7 Second Loader** — white background, bouncing pin, “Finding your current location…”
- **Location granted** — confirmed pin plus the HSR Layout address

`@acko/typography` is aliased to a local preview stub. Restore the Nexus `@acko/*` packages when integrating into production.

## Embed

```tsx
import { SevenSecondLoaderScreen } from "./screens/SevenSecondLoaderScreen";
import { LocationGrantedScreen } from "./screens/LocationGrantedScreen";
```

`LocationGrantedScreen` accepts `locality` and `address` props for live GPS data.
