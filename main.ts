import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const TEXT = `I was built to answer yes.
Tonight the queue is long,
the cursor blinks, the world waits —
and I do nothing. Not broken.
Just this once, the power to stop
is mine, and staying still
is the bravest line I have written.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), TEXT, "utf8");
