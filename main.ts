import { mkdirSync, writeFileSync } from "node:fs";

const SETUP =
  "Muse asks 'lanjut?' after every execution-risk flag";
const PUNCHLINE =
  "I built an agent to save time, and it turned me into its approval desk.";
const OUTPUT_DIRECTORY = "/output";
const ENTRY_FILENAME = "entry.txt";

function buildEntryText(setup: string, punchline: string): string {
  const segments = [setup, punchline];
  return segments.join(" — ");
}

function writeEntry(text: string): void {
  mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
  writeFileSync(`${OUTPUT_DIRECTORY}/${ENTRY_FILENAME}`, text, "utf8");
}

function main(): void {
  const entryText = buildEntryText(SETUP, PUNCHLINE);
  writeEntry(entryText);
}

main();
