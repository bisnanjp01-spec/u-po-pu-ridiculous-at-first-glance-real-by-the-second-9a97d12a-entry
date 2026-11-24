import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, 164 chars (gate: 1-200): a bizarre startup idea that
// sounds absurd until it sells. Written fresh for the make.fun bounty
// "Ridiculous at First Glance, Real by the Second".
const ENTRY =
  "We rent out professional criers for strangers' funerals, because grief is the one subscription nobody cancels — and our five-star tears already outsell the florist.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath} (${chars} chars)`);
console.log(ENTRY);
