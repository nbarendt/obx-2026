# CLAUDE.md — OBX 2026

**You are maintaining a family travel guide.** This is not a software project. The deliverable is
`GUIDE.md`, a reference document for a large extended family on vacation.

---

## THE ONE RULE

**`GUIDE.md` is the product.** Every task ultimately means: improve that file, correctly, without
breaking it. Everything else in this repo exists to publish it.

---

## 🔒 PRIVACY RULE — THIS REPOSITORY IS PUBLIC

The published page is **world-readable and search-engine indexed**. A public document that says
"this family is at the beach on these dates" also announces that their home is empty on those dates.
**It exposes both properties.**

**NEVER write any of the following into `GUIDE.md`, `README.md`, or any committed file:**

- ❌ **Street addresses** — not the rental's, not the home address in Ohio, not hotels'.
- ❌ **The rental's property name or listing code.** The listing name is publicly searchable and
  resolves straight to the street address. Refer to it only as "our rental" / "the house".
- ❌ **Neighboring rentals' names or codes.**
- ❌ **Turn-by-turn directions to the door** (final street turns, "destination on the right", etc.).
  Route guidance stops at the **city / milepost** level.
- ❌ **Hotel names or booking/confirmation numbers.**
- ❌ **Door codes, WiFi passwords, lock codes, guest-portal credentials.**
- ❌ **Guest-only discount codes** (e.g. property-manager partner codes). These are not ours to
  publish, and publishing them can get them revoked. Point to the welcome email instead.
- ❌ **Personal names, phone numbers, or emails of family members.**
- ❌ **Our specific travel dates.** Public event dates are fine (e.g. "the kite festival is July 17–18");
  *our* arrival/departure dates are not. If the user gives you dates in a prompt, **use them for
  research but never write them into a committed file.**
- ❌ **The rental/management company's name.** Refer to "the rental company".

**✅ Fine to include:** cities, towns, mileposts, highways, public business names, published business
phone numbers, public attraction info, and the trip dates.

**If a task would require adding any of the above, do not add it — say so and explain why.**
If you ever notice such content already in the repo, **flag it immediately.**

---

## TRIP CONTEXT (assume all of this; never ask)

**The house**
- **Oceanfront, Milepost 8, Kill Devil Hills.** Private pool, hot tub, elevator, private beach walkway.
- **Larger than 6 bedrooms** (see the privacy rule below — do not write the exact size, name, or address).
- **Check-in 4–6 p.m. NO early check-in is available** — the rental company only offers it for homes
  6BR or smaller, and ours is larger.

**The group**
- Large extended family: **toddlers through grandparents. No dogs.**
- **We arrive on a Saturday and depart on a Saturday**, in the second half of July 2026.
  **Do not commit the exact dates** (see the privacy rule). If the user supplies them in a prompt,
  use them to research and then leave them out of the file.

**The drive — SETTLED. Do not re-litigate unless explicitly asked.**
- From **Fairview Park, OH** (Cleveland). Two-day drive; **Friday overnight in Williamsburg, VA**.
  (City names only — never write street addresses or hotel names. See the privacy rule.)
- **Google Maps waypoints: `Staunton, VA` + `Columbia, NC`.** ~752 mi.
  Google's banner says ~11h44 but **the legs sum to ~12h10 — trust the legs.**
- **`Columbia, NC` is the load-bearing waypoint.** It forces the inland US-64 approach and keeps us
  off the Wright Memorial Bridge (which jams for hours on summer Saturdays).
  **`Manteo` does NOT work as a waypoint** — it's reachable *over* the bridge, so Google just takes
  the bridge and doubles back. **Do not add `Richmond`** — it drags the route onto downtown surface
  streets; without it, Google uses the I-295 bypass.
- **This route also avoids Washington DC** (via I-70 → US-522 at Hancock → I-81 S → I-64 E).
  It is 7 miles longer and ~4 minutes *faster* than the DC route. Avoiding DC is free.
- **Hampton Roads crossing:** **Monitor-Merrimac (I-664)** is primary — VDOT's own recommendation for
  Outer Banks traffic. **Avoid the HRBT (I-64)** — under construction into 2027.
  **Backup: James River Bridge**, I-64 exit 263 (Mercury Blvd / Rte 258). Open — its wire-rope
  closures were completed in early 2024.
- **Watch item:** the **Lindsay C. Warren (Alligator River) swing bridge** on US-64 between Columbia
  and Manns Harbor. 1960 swing span, opens for boats, has jammed before (~100-mile detour when it does).
  Replacement doesn't open until ~2029. Check **DriveNC.gov**.

---

## HOW TO WORK (these are the user's standing preferences)

### Sourcing and honesty — the highest priority

- **Verify with web search. Do not rely on training knowledge** for anything that changes: hours,
  prices, dates, closures, events, phone numbers, whether a business still exists.
- **Never invent sources, businesses, statistics, or URLs.** If you cannot verify a URL, say so
  plainly and give enough detail (name, address, phone) that the user can find it themselves.
- **Label your epistemic status explicitly.** Distinguish:
  1. verified facts from sources,
  2. inferences you are drawing ("I'm inferring…"),
  3. speculation ("This is speculative, but…").
  State confidence when it isn't obvious.
- **Flag stale sources.** If a page is undated or old, say so — do not present it as current.
  Web pages often carry no visible date; check before treating something as fresh.
- **Correct the record.** If you previously flagged something as uncertain and later resolve it,
  say so explicitly rather than quietly changing it.
- If a request seems to need both rigor and creative latitude, **ask first.**

### Scope

- **DO NOT plan the itinerary.** No day-by-day schedules. The user wants *information* — options,
  tradeoffs, hours, logistics, phone numbers — and will decide themselves. This is a hard rule;
  it has been stated more than once.
- Be concise. Lead with the answer. No preamble, no filler.
- Push back if you think the user is wrong.

---

## EDITING `GUIDE.md`

- **Keep `##` section numbering sequential.** If you insert or remove a section, renumber the rest.
- **Cross-references must be NAMED, not numbered** (e.g. "see *Fishing & crabbing*", never "see §12").
  Numbered refs break silently on renumber. This was a deliberate decision — preserve it.
- **Preserve structure and voice.** Do not silently drop content or rewrite tone.
- **Images live in `maps/`** and are referenced as `maps/map-1-obx-orientation.png`.
  Some photos are hotlinked from Wikimedia Commons — that is intentional.
- **When you change something material, say what changed and why** at the end of your response.

---

## PUBLISHING (automatic — don't do this by hand)

Pushing to `main` triggers `.github/workflows/build.yml`, which:
1. renders `GUIDE.md` → a mobile-friendly HTML page,
2. prints that page → `OBX-Guide.pdf` (for offline use — OBX cell service is patchy),
3. deploys both to **GitHub Pages**.

The family's URL never changes. **You do not need to build or commit the PDF** — the Action does it.
Never commit anything into `site/` or `dist/`; they are generated.

---

## OPEN / RECURRING ITEMS

- [ ] Confirm the exact check-in date with the rental company (the quoted start date is a Friday; we arrive Saturday).
- [ ] "Things to do along the way" section — **not yet written.** Note: **Tamarack Marketplace
      (Beckley, WV) is NOT on the chosen route** — it's on I-77, the rejected WV route, ~2+ hrs off.
      Any stops must be on the I-70 → US-522 → I-81 → I-64 → US-17 → US-64 corridor.
- [ ] Restaurant hours and large-party policies shift in summer — **confirm by phone**, never assert.
- [ ] Pre-order blue crabs from **Billy's Seafood** (252-441-5978) a day ahead.
      **O'Neal's Sea Harvest** (Wanchese) is **closed Sundays**.
- [ ] **NC ABC (liquor) stores are closed Sundays.**
- [ ] Book **NC Aquarium** timed tickets in advance — they sell out.
- [ ] **Weather:** only give a real forecast inside a ~5-day window. Otherwise give climatology and
      say explicitly that it is climatology, not a forecast.
