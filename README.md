# Azure Cert Prep

A private study app for Microsoft Azure certifications, built to share with friends. It helps you train for the exams with **flashcards**, a **deep question bank**, and **case studies**, each linked back to the official Microsoft Learn documentation.

> No backend, no database, no complex setup for your friends — it's a static site. Each person's progress is saved privately in their own browser.

## Courses included

| Exam | Certification |
|------|---------------|
| AZ-104 | Azure Administrator Associate |
| AZ-305 | Azure Solutions Architect Expert |
| SC-500 | Implementing End-to-End Security Controls for Cloud and AI Workloads |
| AI-200 | Developing AI Cloud Solutions on Azure |
| AI-500 | Designing and Implementing Multi-Agent AI Solutions |

Each course is grounded in the exam's official **skills measured** domains, with content organized under those domains.

## Features

- **Home screen** — choose which course you want.
- **Flashcards** — flip cards for key terms, mark the ones you know.
- **Question bank** — multiple-choice practice with instant feedback, explanations, and links to the relevant Microsoft Learn doc.
- **Case studies** — scenario-based questions, like the real exam.
- **Supporting docs** — curated Microsoft Learn links per domain, so you can close gaps when you miss a question.
- **Progress tracking** — scores and "known" flashcards saved locally in the browser.
- **Access code gate** — the app is behind a shared code (see below).

## Quick start (local development)

```bash
npm install
npm run dev
```

Open http://localhost:3000 and enter the access code (default: `AzureReady2026`).

To produce the static site locally:

```bash
npm run build   # outputs to ./out
```

You can preview the production build with any static server, e.g.:

```bash
npx serve out
```

## How your friends use it

They don't install anything. Once the app is deployed (below), you share **one link + the access code**, and they open it in a browser. Their progress is saved in their own browser automatically. No Node, no npm, no accounts.

## Deploying (free, easy, no server)

The app builds to a plain static site (`out/`), so it runs on any static host. Pick one:

### GitHub Pages (recommended — GitHub-native, zero config)

This repo already includes a GitHub Actions workflow that builds and deploys the site for you.

1. Push this repo to GitHub (on the `main` branch).
2. In the repo: **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.
3. The workflow runs automatically and publishes to `https://<user>.github.io/<repo>/`.

The sub-path (`/<repo>/`) is handled automatically via `BASE_PATH` — no config changes needed. Every push redeploys.

### Vercel

1. Push to GitHub → [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
2. Vercel auto-detects Next.js. Framework preset **Next.js**, leave the rest default.
3. Deploy. You get a clean URL at the root, and every `git push` redeploys automatically.

### Netlify

1. Push to GitHub → [netlify.com](https://netlify.com) → **Add new site → Import**.
2. The included `netlify.toml` already sets build command `npm run build` and publish directory `out` — no manual settings needed.

> Note: any static host (including GitHub Pages) is **public** at its URL. The access code is your gate — see below.

## The access code (invite-only gate)

The app is gated behind a single shared access code. **Share this code with the friends you invite.**

- Default code: **`AzureReady2026`**

To change it, edit `src/lib/config.ts`:

1. Pick a new code, e.g. `MySecret2026`.
2. Generate its SHA-256 hash:
   ```bash
   printf 'MySecret2026' | sha256sum
   ```
3. Replace `ACCESS_CODE_HASH` with the hex output.
4. Commit and push — it redeploys.

> ⚠️ This is a **soft gate**, not real security. The study content is bundled into the app, so a determined person can bypass the code. It keeps out casual/accidental visitors only. If you need true privacy (content unreachable until someone is invited), use **Cloudflare Access** (free up to 50 users) or **Vercel Password Protection** in front of the app instead.

## Keeping content up to date

All study content lives in **versioned JSON files** under `src/content/`. Updating is just edit → commit → push (auto-redeploys).

```
src/content/
├── courses.json            # course list & metadata (name, domains, colors, links)
├── az-104/
│   ├── flashcards.json     # { term, definition, domain }[]
│   ├── questions.json      # practice questions + explanations + doc links
│   ├── questions-2.json    # (optional) extra question batches — loader merges them all
│   ├── case-studies.json   # scenario + requirements + questions
│   └── docs.json           # supporting docs grouped by domain
├── az-305/  (same files)
├── sc-500/  (same files)
├── ai-200/  (same files)
└── ai-500/  (same files)
```

### Adding questions / flashcards

Edit the relevant JSON file. A question looks like:

```json
{
  "id": "az-104-q23",
  "domain": "Implement and manage storage",
  "prompt": "Which access tier is cheapest for rarely-accessed data?",
  "options": ["Hot", "Cool", "Archive", "Premium"],
  "answer": 2,
  "explanation": "Archive is the cheapest tier for rarely-accessed data.",
  "docs": [{ "label": "Blob access tiers", "url": "https://learn.microsoft.com/..." }]
}
```

- `answer` is the **zero-based index** of the correct option.
- `docs` are the "supporting documents" links shown when a user misses the question.

To add a large batch of questions, create `questions-2.json` (or `questions-3.json`, …) in the same folder, then add its import and spread it into the `questions` array in `src/lib/content.ts`. The app merges every `questions*.json` file for a course.

### Adding a whole new course

1. Create a folder `src/content/<id>/` with the 4 JSON files.
2. Add an entry to `src/content/courses.json`.
3. Register the imports in `src/lib/content.ts` (the `courseContent` map).
4. Build and deploy.

## Project structure

```
src/
├── app/
│   ├── page.tsx                 # access gate + course picker (home)
│   ├── course/[id]/             # overview, flashcards, questions, case studies, docs
│   └── ...
├── components/                  # UI (CourseShell, FlashcardsView, QuestionsView, …)
├── content/                     # ⬅ all study content (JSON)
└── lib/                         # content loader, types, localStorage store, config
```

## Tech

Next.js (App Router) + React + Tailwind CSS, exported as a fully static site.
