import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Judge brief: one number, digits only, the honest count of open browser tabs — the more surprising count wins, as long as it reads real and lived-in.
const COUNT = "847";

// Self-check: the sealed gate accepts UTF-8 text of 1 to 5 characters, not only white space; the entry must be digits only.
if ([...COUNT].length < 1 || [...COUNT].length > 5 || !/^\d+$/.test(COUNT)) {
  throw new Error("entry fails the digits-only 1-5 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), COUNT, "utf8");
