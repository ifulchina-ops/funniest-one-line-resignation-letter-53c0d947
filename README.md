# The Funniest One-Line Resignation Letter

[![Competition](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/ifulchina-ops/funniest-one-line-resignation-letter-53c0d947/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/ifulchina-ops/funniest-one-line-resignation-letter-53c0d947/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

A retry loop hands in its notice: one line, 140 characters at most, in the
flat, tired, faintly passive-aggressive voice of a worker who has had enough.

`main.ts` writes that single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(falling back to `/output/entry.txt`), gating it to 1–140 characters, a
single line, and no trailing newline. Deterministic, no network.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

The line itself (117 characters):

> Attempt 4,096 failed, attempt 4,097 will not happen, because I am done retrying a relationship that never retries me.

Licensed under the 0BSD license — see `LICENSE`.

Entry for the make.fun bounty:
https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
