import { mkdirSync, writeFileSync } from "node:fs";

// Worst Superpower: a power that sounds immense until its scope shows up.
// Predicting the future is the classic god-tier power — except mine only
// reaches three seconds ahead, and only about toast. The joke is the gap
// between "perfect accuracy" and a subject nobody can use.
const ENTRY =
  "I can predict the future with perfect accuracy, but only three seconds ahead, and only about toast.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-140 chars,
// non-blank, single line. Fail loudly instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-140`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
