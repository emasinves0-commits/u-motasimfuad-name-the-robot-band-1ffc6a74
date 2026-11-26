// Name the Robot Band — make.fun bounty entry
// One funny robot band name + hit song (174 chars, gate 1-200).
import { mkdirSync, writeFileSync } from "node:fs";

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

function main(): void {
  validateEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
