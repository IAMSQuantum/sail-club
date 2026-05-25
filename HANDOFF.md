# SAIL Club site — handoff notes

Quick orientation for the next time we edit this site. Read this first, then go.

## What this site is

Static bilingual site for the SAIL (Sharing AI Lunch) Club at IAMS, Academia Sinica. No build step, no framework — plain HTML/CSS/JS. Almost certainly served from GitHub Pages or similar (assume **case-sensitive filesystem** when picking image filenames).

Contacts in the footer:
- Shayne Bennetts `s.p.bennetts@g.iams.sinica.edu.tw`
- Qian-Rui Huang 黃千睿 `qrhuang@gate.sinica.edu.tw`

## File map

| File | Purpose |
|---|---|
| `index.html` / `index_zh.html` | Home page (EN / 繁體中文). Lists upcoming + archive lunches. |
| `resources.html` / `resources_zh.html` | Static resource page (models, tools, tutorials, videos, guidelines). |
| `talks.js` / `talks_zh.js` | The single source of talk metadata. Same order in both files — see "Renderer contract" below. |
| `main.js` | `renderTalks(listId, { start, count })` — generates talk cards from the `talks` array, handles expand/collapse and past/future date label. |
| `style.css` | All styles. 2-column grid for `.talk-list` at desktop, collapses to 1-col under 720px. |
| `*.png`, `*.gif`, `*.jpg` | Logos and talk thumbnails. **Filenames are case-sensitive on the live host** (e.g. `Wavemeter.gif`, not `wavemeter.gif`). |
| `IAMS_AI_Guidelines.pdf` | Linked from the Resources page. |

## How talks render — renderer contract

`index.html` and `index_zh.html` each have one or more `<section id="talk-list-XYZ">` containers, then call `renderTalks("talk-list-XYZ", { start, count })` to slice into the shared `talks` array.

Example (current state):
```js
renderTalks("talk-list-may26", { start: 3, count: 2 });          // entries 3..4
renderTalks("talk-list-archive-apr29", { start: 0, count: 3 });   // entries 0..2
```

**Critical invariants:**
1. `talks.js` and `talks_zh.js` must have **identical order** — `start`/`count` slices both arrays the same way. If you add/remove/reorder a talk, do it in both files in the same position.
2. Section IDs in the HTML must match the strings passed to `renderTalks`. If you rename an ID, update both the `<section>` and the script call.
3. **Past / upcoming label is automatic.** `main.js` parses `presentedDate` and shows "Presented / 發表日期" if the date is past, "To be presented / 預計發表" if future. Date formats it understands:
   - English: `"12pm Tuesday May 26, 2026"` — regex picks up the `Month DD, YYYY` part.
   - Chinese: `"2026 年 5 月 26 日（週二）中午 12點"` — regex picks up `YYYY 年 M 月 D 日`.
   If you use a different format, the label may fall back to "upcoming" silently. Keep these formats.

**Talk object shape** (see `talks.js`):
```js
{
  name: "...",
  image: "filename.gif",            // case-sensitive! must exist in repo root
  presenter: "Name 中文名",
  presentedDate: "12pm Tuesday May 26, 2026",
  contributors: "Names, or None listed",
  labGroup: "Lab name https://url",   // URL must be at END of string — parser is fragile
  keywords: ["a", "b"],
  sourceCode: "https://...",          // empty string → renders "TBD" / "待補"
  appLink: "https://...",             // optional — empty → "TBD" / "待補"
  description: "..."
}
```

`labGroup` URL-extraction regex (`main.js:46-52`) requires the URL at the **end** of the string with no trailing space/punctuation. If you ever store the lab name and URL together with a description after the URL, the link will break — split them or fix the regex.

## Common edits — checklists

### Change next-lunch date / venue
1. `index.html` lines ~34-37 (heading + "Place:" line + section id).
2. `index_zh.html` lines ~35-38 (mirror).
3. Update every `presentedDate` for talks at that lunch in **both** `talks.js` and `talks_zh.js`.
4. If the section id changes, update both the `<section id="...">` and the `renderTalks("...")` call in the inline `<script>` at the bottom.

### Add a new talk
1. Append the talk object to `talks.js` and `talks_zh.js` (same index in both).
2. Drop the thumbnail image into the repo root. **Match exact case** in `image: "..."`.
3. Bump cache-busting query string (see below).
4. If the talk belongs to a lunch that isn't currently in the renderer call, add or extend the `renderTalks(...)` slice.

### Move past talks to archive
1. In `index.html` / `index_zh.html`, restructure the headings — move the lunch heading + section under `<h1>Archive:</h1>` / `<h1>過往紀錄：</h1>`.
2. Reorder the `renderTalks(...)` calls if needed — the slices into the `talks` array stay the same, but the order of calls determines visual order on the page.
3. No need to touch `talks.js` — the past/upcoming label flips automatically based on today's date.

### Add an image
- Put it in the repo root alongside the HTML.
- Reference by **exact filename case** (`Wavemeter.gif`, not `wavemeter.gif`). Windows hides case bugs locally but GitHub Pages will 404.

## Cache-busting

CSS and JS are loaded with `?v=YYYYMMDD` (or `YYYYMMDDx` if multiple bumps in one day). When you change `style.css`, `main.js`, `talks.js`, or `talks_zh.js`, bump the version on **all four HTML files**:
- `index.html` — `<link rel="stylesheet" href="style.css?v=...">` and both `<script src="...?v=...">` tags.
- `index_zh.html` — same.
- `resources.html` / `resources_zh.html` — `<link rel="stylesheet" href="style.css?v=...">` (no scripts on resource pages).

Convention so far: date-based, e.g. `?v=20260518`, `?v=20260518b` for a second bump same day.

## Layout / CSS notes

- `.talk-list` is a **2-column grid** by default (`style.css:107-111`). Collapses to 1-col under 720px. Don't re-introduce per-ID overrides — they went stale last time the section IDs changed and broke the layout silently.
- Talk cards are click-to-expand. Keyboard support (Enter/Space) is wired in `main.js`. ARIA attributes are set — preserve them if rewriting card markup.
- Featured resource blocks on the Resources page have two variants: default (teal) and `.featured-library` (brown). See `style.css:223-291`.

## Known issues / TODOs (from the original review, not all fixed)

- **Intro paragraph (`index.html:30`) still has prose nits:** "chinese or english" → "Chinese or English"; missing serial comma; "are interesting in using" → "are interested in using". User said leave them for now; revisit if doing copy polish.
- **Phone number in footer** (`+886-2-2366-8236`) routes to Academia Sinica main, not IAMS. Possibly intentional — confirm with user before changing.
- **ZH ACE link** (`resources_zh.html:40-42`) points at the non-`/en/` path; not verified to actually serve Chinese.
- **`<h1>` outline** — multiple `<h1>` on the home page ("Upcoming Lunches", "Archive:"). Semantic but not critical; the user has not asked to fix.
- **XSS-in-`innerHTML`** (`main.js:54-75`) — `talks.js` is author-controlled today, but the renderer interpolates fields straight into HTML. If anyone wires up a form or external feed, escape first.
- **`labGroup` URL parser** is fragile (URL must be last token). Consider splitting into `labGroupName` + `labGroupUrl` if it bites.

## User preferences observed

- Wants concise updates; doesn't need long summaries of what changed.
- Verifies day-of-week claims (we got caught once on "Wednesday May 27" vs Tuesday May 26). **Always confirm day-of-week** with the date before writing it into headings.
- Happy to clean up stale data when shipping (e.g. removed placeholder talks).
- Bilingual updates expected — every EN change needs a 中文 mirror.

## Quick sanity checks before declaring done

- [ ] EN and ZH `talks.js` arrays have the same length and same talk order.
- [ ] Every `image:` filename actually exists in the repo root with matching case.
- [ ] Section IDs in HTML match every `renderTalks(...)` call.
- [ ] Cache-busting `?v=...` bumped on all changed assets across all 4 HTML pages.
- [ ] Day-of-week in any heading matches the actual calendar.
- [ ] No "TBD" / "待補" placeholder talks shipped — only intentional ones.
