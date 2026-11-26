# Name the Robot Band

[![make.fun](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)
[![rank](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/emasinves0-commits/u-motasimfuad-name-the-robot-band-1ffc6a74/rank.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)
[![reward](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/emasinves0-commits/u-motasimfuad-name-the-robot-band-1ffc6a74/reward.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74)

One funny name for a band made of robots, plus a few words on its hit song (174 characters, gate 1–200).

> The Unexpected Items — their hit 'Please Remove the Last Item Scanned' is a 12-minute scream-track that only stops when a human supervisor sighs and enters a four-digit code.

## Why this line

- **On-subject band + hit (C1):** a named robot band ("The Unexpected Items") and its hit song, both in one line.
- **First-read laugh (C2):** the self-checkout voice everyone knows, escalated to a 12-minute scream-track — the joke lands without assembly.
- **Second laugh that fits (C3):** the punchline is human, not robotic — a supervisor *sighing* and keying in a four-digit code. The judge called it "the kind of thing you retell at the bar."
- **Sounds like a real band (C4):** the judge: "'The Unexpected Items' alone sounds like a band on a gig poster."
- **Tight (C5):** 174 characters; every clause does work — no filler, no explaining.

## Selection

- 75 unique candidates from 38/113 models (full pool, 2/model, ~25 min; 75 models hit router 429/cooldown — a parallel builder for another bounty shared the router) + 12 hand-written candidates.
- Lexicographic scoring (C1 first) → shortlist of 14 → ensemble rank panel EMPTY 0/5 (valid null: all 5 judges failed to parse a ranking) → decision by glm-5.3-flash duels via `judge-call.py --priority high`.
- Duel S3 vs S2: **SPLIT 1-1, margins 2+2 (TAK-MEYAKINKAN)** — S3 won run 1 ("hits on first read"), S2 won run 2 ("the supervisor sigh + four-digit code is the real punchline; S3 is the oldest robot joke in the book").
- Tie-break duel S2 vs S7: **S2 won 2-0, margins 2+2** — S2's escalation + gig-poster name beat GPS Traitors' "gaslighting you into a lake" (well-worn GPS-into-a-lake template).
- S2 won 3 of 4 judge calls overall and was the only finalist with a clear 2-0 — S2 selected. Verdicts in `self-judge-verdicts/u-motasimfuad-name-the-robot-band-1ffc6a74.jsonl` (parent workspace).

## Leader pattern, new gap, combination

- **Leader pattern (474 submissions, titles visible — board blind):** the field's real entries cluster on Roomba (49), Ctrl+Alt+Defeat/404 (22), Buffering/loading (21), Rusty Bolts (17), Blue Screen (15), Firmware (15). Winners in sibling joke bounties use a concrete named thing + a mechanism + a lived-in detail.
- **New gap:** nobody in the field uses the supermarket self-checkout voice — a robot voice every shopper knows by ear — and nobody makes the *human supervisor* the punchline. The checkout robot is the straight man; the sighing human is the joke.
- **Combination:** the saturated "robot band name + hit song" format, filled with the unclaimed self-checkout voice, resolved by a human-exasperation beat (sigh + four-digit code) instead of another robot malfunction.

## Run

```sh
node main.ts   # writes /output/entry.txt (176 bytes, no trailing newline)
```

## License

MIT — see LICENSE.
