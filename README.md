# Nexa Stays — Waitlist / Founding Hosts

Static **single-page** conversion funnel for founding host acquisition. Visual system matches [`docs/NEXA_STAYS_WEB_DESIGN.md`](../docs/NEXA_STAYS_WEB_DESIGN.md) (Playfair + DM Sans, rose primary `#E8507A`).

**Live site:** [https://join.nexastays.ma](https://join.nexastays.ma/)

## Production freeze (V2 — single page)

One URL for all traffic (organic + paid):

```
https://join.nexastays.ma/?utm_source=instagram&utm_medium=paid&utm_campaign=founding100
```

or simply `https://join.nexastays.ma/`

`apply.html` redirects to `index.html` and preserves the query string (legacy ad links keep working).

### Page spine

1. Minimal nav (logo → nexastays.ma + language)
2. Hero offer (First 100 + 0% commission + ticks)
3. Urgency line (applications reviewed in order received)
4. Trust strip (first 100 / no payment / &lt;2 min)
5. Two-step form
6. Why host / How it works / Why Nexa / FAQ
7. Footer

**Step 1:** name, email, phone, city, property type  
**Step 2:** property count, hosting experience, expected activity, property details (optional)

### Analytics KPI

Vercel Web Analytics custom events on `index.html`:

| Event | When |
|-------|------|
| `form_start` | First focus/input on the form |
| `step1_complete` | Continue from step 1 (validated) |
| `form_submit` | Successful Formspree response |

UTM / `fbclid` / `gclid` are stored in `sessionStorage` and included in the Formspree payload.

Funnel: **Ad Click → Landing → Form Start → Step 1 Complete → Form Submit → Qualified** (manual review).

---

## Files

| Path | Purpose |
|------|---------|
| `index.html` | Conversion landing (form + story) |
| `apply.html` | Redirect → `index.html` (legacy) |
| `css/` | Styles |
| `js/apply.js` | Two-step form, UTM, events |
| `js/i18n.js` | EN / FR / AR |
| `js/city-select.js` | City picker |

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
3. After changing files, **redeploy** so [join.nexastays.ma](https://join.nexastays.ma) picks up the update.

Override the endpoint before scripts load if needed:

```html
<script>
  window.NEXA_WAITLIST_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
</script>
```

## Brand assets

Logo: `assets/nexastays.png` (synced from `nexastays_web/public/images/nexastays.png`).

## Vercel Web Analytics

Static HTML site. Tracking uses Vercel’s HTML snippet (`/_vercel/insights/script.js`).

1. In the Vercel project, open **Analytics** and click **Enable**.
2. Redeploy after enabling.
3. Custom events (`form_start`, `step1_complete`, `form_submit`) appear under Analytics → Events when supported for your plan.
