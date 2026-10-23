# Location Granted Loader 7 Second

This branch is the **location loader**, not the ACKO Drive splash.

Figma:

- [7 Second Loader](https://www.figma.com/design/yMwMrWWlLlS1LkLAnAb5Vu/ADSC-New-Booking-Flow?node-id=2209-20662)
- [Location Permission given](https://www.figma.com/design/yMwMrWWlLlS1LkLAnAb5Vu/ADSC-New-Booking-Flow?node-id=2218-22282)

Dedicated GitHub repo (empty until you push from your account):
https://github.com/tanmayvatsa31/-Location-Granted-Loader-7-Second.git

## Local preview

`npm run dev` on this branch starts the loader on **port 5174**, so it does not collide with splash on 5173.

| URL | What you see |
|-----|----------------|
| http://localhost:5174/?screen=loader | 7 second loader |
| http://localhost:5174/?screen=granted | Location granted |
| http://localhost:5174/ | Loader, then granted after 7s |

```bash
git checkout cursor/location-granted-loader-c90a
npm install --registry https://registry.npmjs.org
npm run dev
```

Open the `Local: http://localhost:5174/` line Vite prints. That is this app. Figma / Amplitude / Supabase MCP tools do not host this preview.

`http://localhost:5173/` is the splash app if that server is still running. Do not use it for the loader.
