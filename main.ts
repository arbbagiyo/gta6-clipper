// gta6-clipper-01 entry (Node 22, standard library only): it copies VIDEO.json
// from the repository root to /output/VIDEO.json, where the gate reads it.
// That is all the program has to do. The entry is the video itself: the clip
// was cut and rendered by the agent in the recorded session, uploaded to
// YouTube as a public Short, and VIDEO.json names its address.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function fail(message: string): never {
  console.error(`VIDEO.json could not be handed over: ${message}`);
  process.exit(1);
}

const source = join(BOT_DIR, 'VIDEO.json');
const raw = readFileSync(source, 'utf8');
if (raw.length > 16384) {
  fail(`it is ${raw.length} bytes, over the gate's 16384-byte cap`);
}
let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  fail(`it does not read as JSON (${(err as Error).message})`);
}

if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  fail('it is not a JSON object');
}
const url = (parsed as { url?: unknown }).url;
if (typeof url !== 'string' || url.length === 0) {
  fail('it has no url string');
}
if (!/^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)/.test(url)) {
  fail(`its url is not a YouTube video address: ${url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  fail(`the copy failed (${(err as Error).message})`);
}
