// The Funniest One-Line Resignation Letter — make.fun entry.
// A retry loop hands in its notice, in its own flat, tired voice:
// 4,096 attempts, zero thanks, and a relationship that never retries back.
// Deterministic, no network, no input. Writes the one line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Setup: the count that proves the loop showed up every single time.
const SETUP = "Attempt 4,096 failed, attempt 4,097 will not happen,";
// Punchline: the complaint only a retry loop could make.
const PUNCHLINE =
  "because I am done retrying a relationship that never retries me.";

const line = `${SETUP} ${PUNCHLINE}`;

// Gate: UTF-8 text, 1-140 characters, not only whitespace, single line.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry is ${line.length} characters, must be 1-140`);
}
if (line.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8"); // no trailing newline
console.log(`wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
