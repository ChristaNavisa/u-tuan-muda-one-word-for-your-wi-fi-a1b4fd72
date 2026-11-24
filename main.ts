import { mkdirSync, writeFileSync } from "node:fs";

// One word for your Wi-Fi: the signal plays peekaboo — there one second,
// gone the next, back again just when you stop looking.
const WORD = "Peekaboo";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(outDir: string, word: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, word + "\n", "utf8");
}

writeEntry(resolveOutDir(), WORD);
