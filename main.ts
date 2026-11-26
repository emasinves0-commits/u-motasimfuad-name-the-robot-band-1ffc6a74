// Name the Robot Band — make.fun bounty entry
// One funny robot band name + hit song (174 chars, gate 1-200).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "The Unexpected Items — their hit 'Please Remove the Last Item Scanned' is a 12-minute scream-track that only stops when a human supervisor sighs and enters a four-digit code.";
const MAX_CHARS = 200;

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${text.length}`);
  }
  if (!text.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function selfTest(): void {
  // Round-trip check: validate, write to a temp file, read back, compare.
  validateEntry(ENTRY);
  const tmp = "/tmp/robot-band-self-test-entry.txt";
  writeFileSync(tmp, ENTRY, "utf8");
  const back = readFileSync(tmp, "utf8");
  if (back !== ENTRY) {
    throw new Error("self-test round-trip mismatch");
  }
  if (back.length !== ENTRY.length || back.length > MAX_CHARS) {
    throw new Error(`self-test length mismatch: ${back.length}`);
  }
  console.log(`self-test OK: ${ENTRY.length} chars, round-trip identical`);
}

function main(): void {
  validateEntry(ENTRY);
  // Guards: no leading/trailing whitespace, no trailing newline in output.
  if (ENTRY !== ENTRY.trim()) {
    throw new Error("entry has leading/trailing whitespace");
  }
  if (ENTRY.endsWith("\n") || ENTRY.endsWith("\r")) {
    throw new Error("entry must not end with a newline");
  }
  if (process.argv.includes("--self-test")) {
    selfTest();
    return;
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
