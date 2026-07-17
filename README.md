# Nexa Stays — Waitlist / Founding Hosts

Static landing for **founding host** acquisition. Visual system matches [`docs/NEXA_STAYS_WEB_DESIGN.md`](../docs/NEXA_STAYS_WEB_DESIGN.md) (Playfair + DM Sans, rose primary `#E8507A`).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Marketing landing (hero, why host, how it works, CTA) |
| `apply.html` | Host application form + success modal |

## Run locally

```bash
cd nexastays-waitlist-web
npm run dev
```

Open http://localhost:3080

## Form submissions

By default, applications are stored in the browser (`localStorage` key `nexa_host_waitlist_applications`) so you can demo without a backend.

To POST to a real endpoint, set before load:

```html
<script>
  window.NEXA_WAITLIST_ENDPOINT = "https://your-api.example/waitlist";
</script>
```

## Brand assets

Logo: `assets/nexastays.png` (synced from `nexastays_web/public/images/nexastays.png`).
