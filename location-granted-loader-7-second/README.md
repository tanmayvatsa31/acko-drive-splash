# Location Granted Loader 7 Second

Loader-only app for the ADSC New Booking Flow. This is **not** the ACKO Drive splash.

- [7 Second Loader](https://www.figma.com/design/yMwMrWWlLlS1LkLAnAb5Vu/ADSC-New-Booking-Flow?node-id=2209-20662)
- [Location Permission given](https://www.figma.com/design/yMwMrWWlLlS1LkLAnAb5Vu/ADSC-New-Booking-Flow?node-id=2218-22282)

## Local preview

```bash
git clone https://github.com/tanmayvatsa31/-Location-Granted-Loader-7-Second.git
cd -- -Location-Granted-Loader-7-Second
npm install --registry https://registry.npmjs.org
npm run dev
```

Open the `Local: http://localhost:5173/` URL Vite prints.

- `/` — loader for 7 seconds, then location granted
- `/?screen=loader` — loader only
- `/?screen=granted` — granted only
