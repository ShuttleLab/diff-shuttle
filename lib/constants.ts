export const SUPPORTED_EXTENSIONS = [
  "txt",
  "json",
  "csv",
  "js",
  "jsx",
  "ts",
  "tsx",
  "py",
  "html",
  "css",
  "md",
  "xml",
  "yaml",
  "yml",
  "toml",
  "ini",
  "cfg",
  "conf",
  "sh",
  "bash",
  "sql",
  "rb",
  "java",
  "c",
  "cpp",
  "h",
  "hpp",
  "go",
  "rs",
  "php",
  "swift",
  "kt",
];

export const DIFF_MODES = [
  { value: "text", label: "Text Diff" },
  { value: "word", label: "Word Diff" },
  { value: "json", label: "JSON Diff" },
  { value: "csv", label: "CSV Diff" },
  { value: "char", label: "Character Diff" },
] as const;

export const VIEW_MODES = [
  { value: "side-by-side", label: "Side by Side" },
  { value: "unified", label: "Unified" },
] as const;

export const MAX_FILE_SIZE = 10 * 1024 * 1024;
