# SAIL Club site — handoff notes

Quick orientation for the next time we edit this site. Read this first, then go.
Last updated: 2026-09-21.

## What this site is

Static bilingual site for the SAIL (Sharing AI Lunch) Club at IAMS, Academia Sinica. No build step, no framework — plain HTML/CSS/JS.

**Hosting / deploy (confirmed):** git repo `github.com/IAMSQuantum/sail-club`, branch `main`, served by GitHub Pages at https://iamsquantum.github.io/sail-club/. Deploy = commit + `git push origin main`; Pages rebuilds in 1–3 minutes. Build status: `gh api repos/IAMSQuantum/sail-club/pages/builds/latest --jq .status`. The filesystem on the host is **case-sensitive**. Git prints "LF will be replaced by CRLF" warnings on every commit here; they are harmless.

Local checkout: `G:\My Drive\2. Presentations\SAIL\sail-club` (inside the SAIL outreach folder, whose own `..\handoff.md` covers the emails). Shayne expects site edits to be pushed and live, not left in the working tree.

## Current state (2026-09-21)

Home page order: **Next lunch Tue 29 Sep 2026** (two talks by Yi-Quan Li, session 4) → **Tue 20 Oct 2026** (Electronic design using AI) → **Date to be announced** (Creating physics tutorial videos easily; AtomOS) → Archive (Jun 23, May 26, Apr 29). 13 talks in each array. Last commit `319c930`.

Open items:
- AtomOS talk: `sourceCode: ""` (renders TBD) until a repo exists.
- Hung-Chi Wang has no Chinese name on the cards (not known at time of writing).
- The two TBA talks need dates: set `presentedDate` in both talk files (EN `"12pm Tuesday Month D, YYYY"`, ZH `"YYYY 年 M 月 D 日（週二）中午 12點"`), move them into a dated `<h2>` + `<section>` and adjust the `renderTalks` slices.
- Nobody has yet clicked a video card on the live https site to confirm the YouTube player plays (headless checks from `file://` always show Error 153, see "YouTube embeds").
- After 29 Sep: move the Sep 29 heading + section under Archive (see checklist below).

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
| `style.css` | All styles. 2-column grid for `.talk-list` at desktop, collapses to 1-col under 720px. `.talk-video` is the 16:9 box for embedded YouTube players. |
| `favicon.png`, `apple-touch-icon.png` | 64 px / 180 px resizes of `SAIL.png`, linked from all four pages (see "Favicon"). |
| `HANDOFF.md` | This file. |
| `*.png`, `*.gif`, `*.jpg` | Logos and talk thumbnails (`4-1.png`, `4-2.png` = session 4; `AtomOS.gif` = AtomOS talk). **Filenames are case-sensitive on the live host** (e.g. `Wavemeter.gif`, not `wavemeter.gif`). Talks with a `video` field and `image: ""` need no file; the YouTube poster is used. |
| `IAMS_AI_Guidelines.pdf` | Linked from the Resources page. |
| `Presentations/` | Slide PDFs and other files from past talks, linked from talk cards via `slides` / `extras`. Naming convention `<session>-<talk>-<Presenter>-<title>.pdf` (e.g. `3-1-…`). Filenames contain spaces — **URL-encode them (`%20`) in `talks*.js`**. |

## How talks render — renderer contract

`index.html` and `index_zh.html` each have one or more `<section id="talk-list-XYZ">` containers, then call `renderTalks("talk-list-XYZ", { start, count })` to slice into the shared `talks` array.

Example (current state, Sept 2026 — newest talks are at the TOP of the array):
```js
renderTalks("talk-list-sep29", { start: 3, count: 2 });           // next lunch: Eric's two short talks
renderTalks("talk-list-oct20", { start: 2, count: 1 });           // Oct 20: Electronic design using AI
renderTalks("talk-list-tba", { start: 0, count: 2 });             // date TBA: tutorial videos, AtomOS
renderTalks("talk-list-archive-jun23", { start: 5, count: 3 });   // archive
renderTalks("talk-list-archive-may26", { start: 8, count: 2 });   // archive
renderTalks("talk-list-archive-apr29", { start: 10, count: 3 });  // archive
```
Array order is by date, latest first, with TBA talks at the very top (indices 0-1). The order of
the `renderTalks` calls does not matter; the page order comes from where the `<section>` sits.

When a new lunch is added, **prepend** its talks to both arrays and shift every later `start` by the number of talks added. Quick check that both arrays still line up:
```
node -e "const vm=require('vm'),fs=require('fs');const en=vm.runInNewContext(fs.readFileSync('talks.js','utf8')+';talks'),zh=vm.runInNewContext(fs.readFileSync('talks_zh.js','utf8')+';talks');console.log(en.length,zh.length);en.forEach((t,i)=>console.log(i,t.presentedDate,'|',zh[i].presentedDate,'|',t.name.slice(0,40)))"
```

**Critical invariants:**
1. `talks.js` and `talks_zh.js` must have **identical order** — `start`/`count` slices both arrays the same way. If you add/remove/reorder a talk, do it in both files in the same position.
2. Section IDs in the HTML must match the strings passed to `renderTalks`. If you rename an ID, update both the `<section>` and the script call.
3. **Past / upcoming label is automatic.** `main.js` parses `presentedDate` and shows "Presented / 發表日期" if the date is past, "To be presented / 預計發表" if future. Date formats it understands:
   - English: `"12pm Tuesday May 26, 2026"` — regex picks up the `Month DD, YYYY` part.
   - Chinese: `"2026 年 5 月 26 日（週二）中午 12點"` — regex picks up `YYYY 年 M 月 D 日`.
   If you use a different format, the label may fall back to "upcoming" silently. Keep these formats.
   A talk with no date yet uses `presentedDate: "TBA"` / `"待定"`, which renders as "To be presented: TBA".

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
  slides: "Presentations/1-1-Name-Title.pdf",   // optional — URL-encode spaces; empty/missing → "TBD" / "待補"
  video: "https://www.youtube.com/watch?v=ID",   // optional — YouTube link. Details show a "Video" link + embedded
                                                 // player. If image is "" the card thumbnail is the YouTube poster.
  extras: [                           // optional — extra links (demo pages, scripts). Rendered as one line each, only if present.
    { label: "Demo webpage", url: "Presentations/SAIL%20web.html" }
  ],
  description: "..."
}
```

`slides` and `extras` links display just the decoded file name as link text (see `fileLabel` in `main.js`). `extras[].label` is free text and must be written separately in `talks.js` (English) and `talks_zh.js` (中文).

`labGroup` URL-extraction regex (`main.js:46-52`) requires the URL at the **end** of the string with no trailing space/punctuation. If you ever store the lab name and URL together with a description after the URL, the link will break — split them or fix the regex.

## Common edits — checklists

### Change next-lunch date / venue
1. `index.html` lines ~34-41 (heading + "Place:" line + section ids for the next lunch, Oct 20 and TBA blocks).
2. `index_zh.html` lines ~36-43 (mirror).
3. Update every `presentedDate` for talks at that lunch in **both** `talks.js` and `talks_zh.js`.
4. If the section id changes (convention `talk-list-<mon><dd>`), update both the `<section id="...">` and the `renderTalks("...")` call in the inline `<script>` at the bottom of **both** pages.
5. Bump cache-busting, commit, push, then confirm the live page shows the new date (`curl -s https://iamsquantum.github.io/sail-club/index.html | grep "Next lunch"`).
6. The emails in the parent folder (`..\call-for-presenters-2026.html`, `..\register-*.html`) carry the same dates; update them too (see `..\handoff.md`).

### Add a new talk
1. Insert the talk object at the same index in `talks.js` and `talks_zh.js`. Upcoming talks go at the **top** (prepend), which shifts every existing `start` in both pages' `<script>` blocks by one; a talk for an existing lunch goes next to that lunch's talks and only later slices shift.
2. Thumbnail: drop the image into the repo root and **match exact case** in `image: "..."`, or set `image: ""` plus `video: "https://www.youtube.com/watch?v=..."` to use the YouTube poster.
3. Bump cache-busting query string (see below).
4. If the talk belongs to a lunch that isn't currently on the page, add an `<h2>` + `<section id="talk-list-...">` in both HTML files and a matching `renderTalks(...)` call.
5. Run the node array check, render both pages with headless Edge (`msedge --headless=new --disable-gpu --virtual-time-budget=5000 --dump-dom file:///.../index_zh.html | grep -c 'class="talk-item"'` should equal the array length), commit, push.

### Move past talks to archive
1. In `index.html` / `index_zh.html`, restructure the headings — move the lunch heading + section under `<h1>Archive:</h1>` / `<h1>過往紀錄：</h1>`.
2. Reorder the `renderTalks(...)` calls if needed — the slices into the `talks` array stay the same, but the order of calls determines visual order on the page.
3. No need to touch `talks.js` — the past/upcoming label flips automatically based on today's date.

### Add slides for a past talk
1. Drop the PDF into `Presentations/` following the `<session>-<talk>-<Presenter>-<title>.pdf` convention.
2. Set `slides: "Presentations/<URL-encoded filename>.pdf"` on the talk in **both** `talks.js` and `talks_zh.js`.
3. Bump cache-busting (see below).

Still missing as of 2026-09-21: slides for Hao-Rong Yang (session 2-1, has `extras` links instead) and Kenee Kaiser Custodio (session 1-3). Session 4 (Sep 29) slides to be added after the lunch as `4-1-…` and `4-2-…`.

### Add an image
- Put it in the repo root alongside the HTML.
- Reference by **exact filename case** (`Wavemeter.gif`, not `wavemeter.gif`). Windows hides case bugs locally but GitHub Pages will 404.

## Cache-busting

CSS and JS are loaded with `?v=YYYYMMDD` (or `YYYYMMDDx` if multiple bumps in one day). When you change `style.css`, `main.js`, `talks.js`, or `talks_zh.js`, bump the version on **all four HTML files**:
- `index.html` — `<link rel="stylesheet" href="style.css?v=...">` and both `<script src="...?v=...">` tags.
- `index_zh.html` — same.
- `resources.html` / `resources_zh.html` — `<link rel="stylesheet" href="style.css?v=...">` (no scripts on resource pages).

Convention so far: date-based, e.g. `?v=20260518`, `?v=20260518b` for a second bump same day. Current: `?v=20260921b` on all four pages.

## Favicon

`favicon.png` (64 px) and `apple-touch-icon.png` (180 px) are resized from `SAIL.png` and linked from the
`<head>` of all four pages. Without them the browser fell back to `/favicon.ico` of the parent
iamsquantum.github.io site. This repo is separate from the parent site, so nothing there is affected.

## YouTube embeds

Cards with a `video` field embed `https://www.youtube-nocookie.com/embed/<id>` inside `.talk-video`
(16:9 box, `style.css`). Opening such a card from a local `file://` copy shows YouTube "Error 153",
because YouTube refuses embeds with no HTTP referrer. It works on the live https site.

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
- Expects website edits to be committed, pushed and confirmed live in the same session.
- Verifies day-of-week claims (we got caught once on "Wednesday May 27" vs Tuesday May 26). **Always confirm day-of-week** with the date before writing it into headings.
- Happy to clean up stale data when shipping (e.g. removed placeholder talks).
- Bilingual updates expected — every EN change needs a 中文 mirror.

## Quick sanity checks before declaring done

- [ ] EN and ZH `talks.js` arrays have the same length and same talk order.
- [ ] Every `image:` filename actually exists in the repo root with matching case.
- [ ] Section IDs in HTML match every `renderTalks(...)` call.
- [ ] Cache-busting `?v=...` bumped on all changed assets across all 4 HTML pages.
- [ ] Day-of-week in any heading matches the actual calendar.
- [ ] No "TBD" / "待補" placeholder talks shipped — only intentional ones (AtomOS `sourceCode` is intentionally empty for now).
- [ ] Both pages render the full card count in headless Edge (a JS error in one page's `<script>` block silently renders zero cards — this happened once on `index_zh.html`).
- [ ] Pushed, and the live page shows the change.
