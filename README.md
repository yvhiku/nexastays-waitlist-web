# Nexa Stays — Waitlist / Founding Hosts

Static landing for **founding host** acquisition. Visual system matches [`docs/NEXA_STAYS_WEB_DESIGN.md`](../docs/NEXA_STAYS_WEB_DESIGN.md) (Playfair + DM Sans, rose primary `#E8507A`).

**Live site:** [https://join.nexastays.ma](https://join.nexastays.ma/index.html)

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Marketing landing (hero, why host, how it works, CTA) |
| `apply.html` | Host application form + success modal |

## Languages

EN / FR / AR via the header language switcher (`js/i18n.js`). Choice is stored in `localStorage` (`nexa_waitlist_lang`). Arabic uses RTL layout and IBM Plex Sans Arabic. Legal links follow the locale (`/en`, `/fr`, `/ar` on nexastays.ma).

## Run locally

```bash
cd nexastays-waitlist-web
npm run dev
```

Open http://localhost:3080

## Form submissions (Formspree)

Applications POST via Ajax to Formspree form **host-waitlist**:

`https://formspree.io/f/xwvgljwa`

You receive them in the Formspree **Submissions** tab (and email if configured). A local `localStorage` copy is also saved after a successful submit (`nexa_host_waitlist_applications`) for debugging only — Formspree is the source of truth.

### Formspree settings for production

1. **Restrict to Domain:** set `nexastays.ma` (covers `join.nexastays.ma`).
2. If Formspree’s default **reCAPTCHA** is on, turn it off for Ajax (or add your own keys).
3. After changing `js/apply.js`, **redeploy** so [join.nexastays.ma](https://join.nexastays.ma) picks up the update.

Override the endpoint before scripts load if needed:

```html
<script>
  window.NEXA_WAITLIST_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
</script>
```

## Brand assets

Logo: `assets/nexastays.png` (synced from `nexastays_web/public/images/nexastays.png`).
