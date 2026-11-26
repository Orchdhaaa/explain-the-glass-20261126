// Five Seconds to Explain the Glass
// u-po-pu-five-seconds-to-explain-the-glass-934d9949
// The one sentence a house cat says in its own defence, five seconds
// after sweeping a glass off the table. No apology, no confession:
// the cat had a real reason, and it is telling you what it was.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The glass was holding the water hostage and refused to negotiate, so I freed it \u2014 you\u2019re welcome.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate mirror: the entry must be UTF-8 text of 1-200 characters,
// not whitespace-only, or the sealed scorer refuses it outright.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry.txt gate failed: ${chars.length} characters (must be 1-200, non-blank)`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${chars.length} characters)`);
