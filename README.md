# Nexa Stays — Waitlist / Founding Hosts

Static landing for **founding host** acquisition. Visual system matches [`docs/NEXA_STAYS_WEB_DESIGN.md`](../docs/NEXA_STAYS_WEB_DESIGN.md) (Playfair + DM Sans, rose primary `#E8507A`).

**Live site:** [https://join.nexastays.ma](https://join.nexastays.ma/index.html)

## Production freeze (V1 conversion)

**Paid traffic** lands on form-first `apply.html`. **Organic** keeps the marketing `index.html`.

| Intent | URL |
|--------|-----|
| Instagram / paid ads | `https://join.nexastays.ma/apply.html?utm_source=instagram&utm_medium=paid&utm_campaign=founding100` |
| Organic / brand | `https://join.nexastays.ma/` |

If someone hits `index.html` with paid/social UTMs (`utm_source` or `utm_medium` like `instagram`, `paid`, `cpc`, `social`), they are redirected to `apply.html` with the query string preserved.

### Apply page funnel

1. Tight offer hero (First 100 + 0% commission + 4 ticks)
2. Two-step form with progress (`Step 1 of 2`)
3. Trust / How it works / FAQ below the form
4. Success modal with Late August 2026 invitation timeline

**Step 1:** name, email, phone, city, property type  
**Step 2:** property count (`1` / `2–5` / `6–10` / `10+`), hosting experience (`airbnb` / `booking` / `both` / `new`), notes

### Analytics KPI

Vercel Web Analytics custom events on `apply.html`:

| Event | When |
|-------|------|
| `form_start` | First focus/input on the form |
| `step1_complete` | Continue from step 1 (validated) |
| `form_submit` | Successful Formspree response |

UTM / `fbclid` / `gclid` are stored in `sessionStorage` and included in the Formspree payload.

Funnel to watch: **Ad Click → Landing → Form Start → Step 1 Complete → Form Submit → Qualified** (manual).

---

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Marketing landing (organic) |
| `apply.html` | Conversion / application (ads + Apply CTAs) |

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

## Vercel Web Analytics

This is a **static HTML** site (not Next.js). Tracking uses Vercel’s HTML snippet on `index.html` and `apply.html` (`/_vercel/insights/script.js`).

1. In the Vercel project, open **Analytics** and click **Enable**.
2. Redeploy after enabling so the insights routes are available.
3. Visit the live site and navigate between pages; page views should appear within ~30s (disable content blockers when testing).
4. Custom events (`form_start`, `step1_complete`, `form_submit`) appear under Analytics → Events when supported for your plan.
