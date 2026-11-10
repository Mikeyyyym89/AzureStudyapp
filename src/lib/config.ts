// ---------------------------------------------------------------------------
// App configuration
// ---------------------------------------------------------------------------
//
// ACCESS CODE (soft gate)
// -----------------------
// The app is gated behind a single shared access code. The code itself is not
// stored in plain text here — only its SHA-256 hash — so it isn't trivially
// visible in the browser bundle.
//
// To change the code:
//   1. Pick a new code, e.g. "MySecret2026"
//   2. Generate its hash:   printf 'MySecret2026' | sha256sum
//   3. Paste the hex hash below and rebuild/redeploy.
//
// Default code shipped with this app:  AzureReady2026
//
// NOTE: this is a "soft" gate. The study content is bundled into the app, so a
// determined visitor can still bypass it. If you need real privacy (content
// unreachable until a user is invited), use Cloudflare Access or Vercel
// Password Protection instead — see README.

export const ACCESS_CODE_HASH =
  "c3833d136848633e8ecedd308f4579b87b3ce98bc8717cb53351891f51d51250";

export const APP_NAME = "Azure Cert Prep";
export const APP_TAGLINE =
  "Study, drill, and master the Microsoft Azure exams with your friends.";

export const STORAGE_KEYS = {
  unlocked: "acp.unlocked",
  progress: "acp.progress",
} as const;

export const REPORT_REPO = "Mikeyyyym89/AzureStudyapp";

export const BETA_DISCLAIMER =
  "Beta project — results are not guaranteed. Shared privately with friends of Michael Myers.";

export const PRIVACY_NOTICE =
  "Privacy: your progress and results are stored only in this browser, on your device. Nothing is sent to or stored on any server, and we collect no data. Clearing your browser data erases your progress, and it does not sync across devices or browsers.";

export const SCORE_MIN = 100;
export const SCORE_MAX = 1000;
export const PASSING_SCORE = 700;
