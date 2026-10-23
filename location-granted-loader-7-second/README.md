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

Vite opens **http://localhost:5174/?screen=loader** (port 5174 so it does not collide with the splash app on 5173).

- http://localhost:5174/?screen=loader — loader only
- http://localhost:5174/?screen=granted — location granted
- http://localhost:5174/ — loader, then granted after 7s
