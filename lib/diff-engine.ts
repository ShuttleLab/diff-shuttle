import * as Diff from "diff";

export type DiffMode = "text" | "word" | "json" | "csv" | "char";

export interface DiffLine {
  type: "added" | "removed" | "unchanged";
  content: string;
  lineNumber?: number;
  oldLineNumber?: number;
  newLineNumber?: number;
}

export interface DiffResult {
  lines: DiffLine[];
  stats: {
    additions: number;
    deletions: number;
    changes: number;
    unchanged: number;
    totalOld: number;
    totalNew: number;
    diffPercent: number;
  };
}

export interface DiffOptions {
  ignoreWhitespace?: boolean;
  ignoreCase?: boolean;
}

export function computeDiff(
  oldText: string,
  newText: string,
  mode: DiffMode = "text",
  options: DiffOptions = {}
): DiffResult {
  let changes: Diff.Change[];

  switch (mode) {
    case "word":
      changes = Diff.diffWords(oldText, newText, {
        ignoreCase: options.ignoreCase,
      });
      break;
    case "char":
      changes = Diff.diffChars(oldText, newText, {
        ignoreCase: options.ignoreCase,
      });
      break;
    case "json":
      changes = computeJsonDiff(oldText, newText, options);
      break;
    case "csv":
      changes = computeCsvDiff(oldText, newText, options);
      break;
    default:
      changes = Diff.diffLines(oldText, newText, {
        ignoreWhitespace: options.ignoreWhitespace,
      });
  }

  return convertToDiffResult(changes);
}

function computeJsonDiff(
  oldText: string,
  newText: string,
  options: DiffOptions
): Diff.Change[] {
  try {
    const oldObj = JSON.parse(oldText);
    const newObj = JSON.parse(newText);
    const oldFormatted = JSON.stringify(oldObj, null, 2);
    const newFormatted = JSON.stringify(newObj, null, 2);
    return Diff.diffLines(oldFormatted, newFormatted, {
      ignoreWhitespace: options.ignoreWhitespace,
    });
  } catch {
    return Diff.diffLines(oldText, newText, {
      ignoreWhitespace: options.ignoreWhitespace,
    });
  }
}

function computeCsvDiff(
  oldText: string,
  newText: string,
  options: DiffOptions
): Diff.Change[] {
  const oldLines = oldText.split("\n").filter((line) => line.trim());
  const newLines = newText.split("\n").filter((line) => line.trim());
  const oldFormatted = oldLines.join("\n");
  const newFormatted = newLines.join("\n");
  return Diff.diffLines(oldFormatted, newFormatted, {
    ignoreWhitespace: options.ignoreWhitespace,
  });
}

function convertToDiffResult(
  changes: Diff.Change[]
): DiffResult {
  const lines: DiffLine[] = [];
  let additions = 0;
  let deletions = 0;
  let changesCount = 0;
  let unchanged = 0;
  let oldLineNum = 1;
  let newLineNum = 1;

  for (const change of changes) {
    const changeLines = change.value.split("\n");
    const lastLine = changeLines[changeLines.length - 1];
    const linesToProcess =
      lastLine === "" ? changeLines.slice(0, -1) : changeLines;

    for (const line of linesToProcess) {
      if (change.added) {
        additions++;
        lines.push({
          type: "added",
          content: line,
          newLineNumber: newLineNum++,
        });
      } else if (change.removed) {
        deletions++;
        lines.push({
          type: "removed",
          content: line,
          oldLineNumber: oldLineNum++,
        });
      } else {
        unchanged++;
        lines.push({
          type: "unchanged",
          content: line,
          oldLineNumber: oldLineNum++,
          newLineNumber: newLineNum++,
        });
      }
    }

    if (change.added || change.removed) {
      changesCount++;
    }
  }

  const totalOld = oldLineNum - 1;
  const totalNew = newLineNum - 1;
  const totalLines = Math.max(totalOld, totalNew, 1);
  const diffPercent = Math.round(
    ((additions + deletions) / totalLines) * 100
  );

  return {
    lines,
    stats: {
      additions,
      deletions,
      changes: changesCount,
      unchanged,
      totalOld,
      totalNew,
      diffPercent,
    },
  };
}

export function parseFileContent(
  content: string,
  filename: string
): { text: string; error?: string } {
  const ext = filename.split(".").pop()?.toLowerCase();

  if (ext === "json") {
    try {
      JSON.parse(content);
      return { text: content };
    } catch {
      return { text: content, error: "Invalid JSON format" };
    }
  }

  return { text: content };
}

export function exportDiffAsText(result: DiffResult): string {
  const lines: string[] = [];

  for (const line of result.lines) {
    switch (line.type) {
      case "added":
        lines.push(`+ ${line.content}`);
        break;
      case "removed":
        lines.push(`- ${line.content}`);
        break;
      default:
        lines.push(`  ${line.content}`);
    }
  }

  lines.push("");
  lines.push("--- Statistics ---");
  lines.push(`Additions: ${result.stats.additions}`);
  lines.push(`Deletions: ${result.stats.deletions}`);
  lines.push(`Unchanged: ${result.stats.unchanged}`);
  lines.push(`Difference: ${result.stats.diffPercent}%`);

  return lines.join("\n");
}
