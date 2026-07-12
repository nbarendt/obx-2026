# OBX 2026

Family travel guide — **Kill Devil Hills, Outer Banks, NC · July 2026.**

> ⚠️ **This repo is public.** No street addresses, property names, our travel dates, hotel names,
> door codes, rental-company name, or guest-only discount codes belong in it.
> See the privacy rule in `CLAUDE.md`.

📖 **Read it here → `https://<YOUR-USERNAME>.github.io/obx-2026/`**
*(This URL never changes. Share it with the family.)*
A **PDF download** link sits at the bottom of the page — grab it before you go; OBX cell service is patchy.

---

## What's here

| Path | What it is |
|---|---|
| **`GUIDE.md`** | **The guide. This is the source of truth.** Everything else serves it. |
| `CLAUDE.md` | Trip context + working rules. Claude Code reads this automatically. |
| `maps/` | The two orientation maps embedded in the guide. |
| `site-assets/` | CSS + HTML head for the published page. |
| `.github/workflows/build.yml` | Builds the page + PDF and publishes to GitHub Pages. |

`site/` and `dist/` are **generated** — they're gitignored. Don't commit them.

---

## How to update the guide (no laptop required)

1. Go to **claude.ai/code** (or the **Claude iOS app**) and pick this repo.
2. Say what you want, e.g.
   > *"Add a section on things to do along the drive. Only stops on our actual route — I-70 → US-522 → I-81 → I-64 → US-17 → US-64. Verify hours."*
3. Claude works in a cloud VM, then **opens a pull request**.
4. **Review and merge the PR** (GitHub web or the GitHub mobile app — one tap).
5. Merging to `main` fires the Action, which rebuilds the page and PDF.
   **The family's URL updates automatically and never changes.**

Nothing runs on your machine at any point.

---

## Publishing pipeline

```
GUIDE.md  ──push to main──►  GitHub Action
                                  │
                                  ├─ pandoc  → site/index.html  (mobile-friendly page)
                                  ├─ Chrome  → site/OBX-Guide.pdf  (offline copy)
                                  └─ deploy  → GitHub Pages
                                                    │
                                                    ▼
                                   https://<you>.github.io/obx-2026/
```

Chrome-headless is used for the PDF rather than LaTeX so that emoji, tables, and images all render
correctly, and so external links print their URLs (useful on paper with no signal).

---

## Trip facts, at a glance

- **Check-in 4–6 p.m. There is no early check-in** — the rental company only offers it for homes ≤6BR; ours is larger.
- **Driving:** Google Maps waypoints **`Staunton, VA` + `Columbia, NC`**. Overnight **Williamsburg, VA**.
  `Columbia` is the waypoint that keeps you off the Wright Memorial Bridge. **`Manteo` does not work.**
- **NC ABC (liquor) stores are closed Sundays.** So is **O'Neal's Sea Harvest** in Wanchese.
- **Book NC Aquarium tickets in advance** — timed entry, sells out.
- **Billy's Seafood:** 252-441-5978 (call ahead to reserve blue crabs)

See `GUIDE.md` for everything else.
