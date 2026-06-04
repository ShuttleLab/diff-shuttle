type Bilingual = { zh: string; en: string };
type HowTo = { id: string; name: Bilingual; steps: Bilingual[] };
type FaqItem = { q: Bilingual; a: Bilingual };
type UseCase = {
  scenario: Bilingual;
  before: Bilingual;
  after: Bilingual;
};

export const USE_CASES: UseCase[] = [
  {
    scenario: {
      zh: "代码审查与拉取请求",
      en: "Code review and pull requests",
    },
    before: {
      zh: "手动逐行对比代码，容易遗漏细微更改",
      en: "Manual line-by-line code comparison, easy to miss subtle changes",
    },
    after: {
      zh: "自动高亮所有差异，绿色新增红色删除一目了然",
      en: "All differences automatically highlighted — green for additions, red for deletions",
    },
  },
  {
    scenario: {
      zh: "配置文件版本对比",
      en: "Configuration file version comparison",
    },
    before: {
      zh: "两个版本的配置文件难以快速找出差异项",
      en: "Two config file versions — hard to quickly spot changed settings",
    },
    after: {
      zh: "JSON 模式自动格式化并对比，精确定位变更字段",
      en: "JSON mode auto-formats and compares, pinpointing exactly which fields changed",
    },
  },
  {
    scenario: {
      zh: "文档修订跟踪",
      en: "Document revision tracking",
    },
    before: {
      zh: "无法直观看到两版文档的具体修改内容",
      en: "Can't visually see what was specifically changed between document versions",
    },
    after: {
      zh: "逐词对比模式精确标记每个修改的词语",
      en: "Word diff mode precisely marks every modified word",
    },
  },
  {
    scenario: {
      zh: "数据验证与 CSV 对比",
      en: "Data validation and CSV comparison",
    },
    before: {
      zh: "大型 CSV 文件手动对比几乎不可能",
      en: "Manually comparing large CSV files is nearly impossible",
    },
    after: {
      zh: "CSV 模式按行对比，快速发现数据差异",
      en: "CSV mode compares by row, quickly revealing data differences",
    },
  },
  {
    scenario: {
      zh: "学生作业检查",
      en: "Student assignment checking",
    },
    before: {
      zh: "教师难以快速判断两份作业的相似度",
      en: "Teachers struggle to quickly assess similarity between assignments",
    },
    after: {
      zh: "并排对比显示所有差异，差异度百分比一目了然",
      en: "Side-by-side comparison shows all differences, with a clear percentage of changes",
    },
  },
];

export const HOWTOS: HowTo[] = [
  {
    id: "compare-texts",
    name: {
      zh: "如何对比两段文本",
      en: "How to compare two texts",
    },
    steps: [
      {
        zh: "打开 Diff Shuttle 网站（diff.shuttlelab.org）",
        en: "Open the Diff Shuttle website (diff.shuttlelab.org)",
      },
      {
        zh: "在左侧「原始」区域粘贴原始文本，或拖放/选择文件上传",
        en: "Paste your original text in the left 'Original' area, or drag-drop/select a file to upload",
      },
      {
        zh: "在右侧「修改」区域粘贴修改后的文本",
        en: "Paste the modified text in the right 'Modified' area",
      },
      {
        zh: "点击「对比」按钮",
        en: "Click the 'Compare' button",
      },
      {
        zh: "查看差异高亮结果——绿色为新增，红色为删除",
        en: "View the highlighted differences — green for additions, red for deletions",
      },
    ],
  },
  {
    id: "compare-json",
    name: {
      zh: "如何对比 JSON 文件",
      en: "How to compare JSON files",
    },
    steps: [
      {
        zh: "选择对比模式为「JSON 对比」",
        en: "Select 'JSON Diff' as the comparison mode",
      },
      {
        zh: "粘贴或上传两个 JSON 文件",
        en: "Paste or upload two JSON files",
      },
      {
        zh: "点击对比，JSON 会自动格式化后进行结构化比较",
        en: "Click compare — JSON is auto-formatted then structurally compared",
      },
      {
        zh: "查看哪些字段被添加、删除或修改",
        en: "See which fields were added, removed, or modified",
      },
    ],
  },
  {
    id: "export-diff",
    name: {
      zh: "如何导出对比结果",
      en: "How to export comparison results",
    },
    steps: [
      {
        zh: "完成文本对比后",
        en: "After completing a text comparison",
      },
      {
        zh: "点击控制面板中的「导出为文本」按钮",
        en: "Click the 'Export as Text' button in the control panel",
      },
      {
        zh: "差异结果将以 .txt 文件下载，包含所有变更和统计信息",
        en: "The diff result will download as a .txt file with all changes and statistics",
      },
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    q: {
      zh: "Diff Shuttle 是免费的吗？",
      en: "Is Diff Shuttle free?",
    },
    a: {
      zh: "是的，Diff Shuttle 完全免费，没有任何隐藏费用。所有功能都可以无限制使用，无需注册账户。",
      en: "Yes, Diff Shuttle is completely free with no hidden costs. All features can be used without limits and without creating an account.",
    },
  },
  {
    q: {
      zh: "我的文本会被上传到服务器吗？",
      en: "Is my text uploaded to a server?",
    },
    a: {
      zh: "不会。Diff Shuttle 的所有处理都在您的浏览器中本地完成。您的文本永远不会离开您的设备。",
      en: "No. All processing in Diff Shuttle happens locally in your browser. Your text never leaves your device.",
    },
  },
  {
    q: {
      zh: "支持哪些文件格式？",
      en: "What file formats are supported?",
    },
    a: {
      zh: "Diff Shuttle 支持纯文本（.txt）、JSON（.json）、CSV（.csv）、JavaScript（.js/.jsx）、TypeScript（.ts/.tsx）、Python（.py）、HTML、CSS、Markdown 等多种格式。",
      en: "Diff Shuttle supports plain text (.txt), JSON (.json), CSV (.csv), JavaScript (.js/.jsx), TypeScript (.ts/.tsx), Python (.py), HTML, CSS, Markdown, and many more formats.",
    },
  },
  {
    q: {
      zh: "有哪些对比模式？",
      en: "What comparison modes are available?",
    },
    a: {
      zh: "Diff Shuttle 提供五种对比模式：文本对比（逐行）、逐词对比、JSON 对比、CSV 对比和逐字符对比。每种模式适合不同的使用场景。",
      en: "Diff Shuttle offers five comparison modes: Text Diff (line-by-line), Word Diff, JSON Diff, CSV Diff, and Character Diff. Each mode is suited for different use cases.",
    },
  },
  {
    q: {
      zh: "可以忽略空白或大小写进行对比吗？",
      en: "Can I ignore whitespace or case when comparing?",
    },
    a: {
      zh: "可以。Diff Shuttle 提供「忽略空白」和「忽略大小写」两个选项，让您可以根据需要自定义对比行为。",
      en: "Yes. Diff Shuttle provides 'Ignore Whitespace' and 'Ignore Case' options, allowing you to customize comparison behavior as needed.",
    },
  },
  {
    q: {
      zh: "如何对比大文件？",
      en: "How do I compare large files?",
    },
    a: {
      zh: "您可以直接拖放文件或使用「选择文件」按钮上传。Diff Shuttle 支持最大 10MB 的文件。所有处理都在浏览器中完成，大文件可能需要稍长的处理时间。",
      en: "You can drag and drop files or use the 'Select File' button to upload. Diff Shuttle supports files up to 10MB. All processing happens in the browser, so larger files may take slightly longer to process.",
    },
  },
  {
    q: {
      zh: "可以导出对比结果吗？",
      en: "Can I export comparison results?",
    },
    a: {
      zh: "可以。点击「导出为文本」按钮即可将对比结果下载为 .txt 文件，包含所有变更标记和统计信息。",
      en: "Yes. Click the 'Export as Text' button to download the comparison result as a .txt file with all change markers and statistics.",
    },
  },
  {
    q: {
      zh: "Diff Shuttle 和 DiffChecker 有什么区别？",
      en: "What's the difference between Diff Shuttle and DiffChecker?",
    },
    a: {
      zh: "Diff Shuttle 完全在浏览器中处理，不上传任何文件，100% 私密。而 DiffChecker 需要上传文件到服务器。Diff Shuttle 还支持更多对比模式（JSON、CSV、逐字符），且完全免费无广告。",
      en: "Diff Shuttle processes everything in the browser — no file uploads, 100% private. DiffChecker requires uploading files to servers. Diff Shuttle also supports more comparison modes (JSON, CSV, character) and is completely free with no ads.",
    },
  },
  {
    q: {
      zh: "支持并排和统一两种视图模式吗？",
      en: "Does it support both side-by-side and unified views?",
    },
    a: {
      zh: "是的。Diff Shuttle 支持「并排」和「统一」两种视图模式。并排模式左右对照，统一模式在单栏中显示所有变更。",
      en: "Yes. Diff Shuttle supports both 'Side by Side' and 'Unified' view modes. Side-by-side shows changes left and right, while unified displays all changes in a single column.",
    },
  },
];

export const COMPARISON = {
  zh: {
    heading: "Diff Shuttle 与同类工具对比（截至 2026-06）",
    columns: ["功能", "Diff Shuttle", "DiffChecker", "Text-Compare"],
    rows: [
      ["100% 本地处理", "✓", "✗", "✗"],
      ["无需注册", "✓", "✗", "✓"],
      ["JSON 对比", "✓", "付费", "✗"],
      ["CSV 对比", "✓", "✗", "✗"],
      ["逐词对比", "✓", "✓", "✗"],
      ["逐字符对比", "✓", "✗", "✗"],
      ["文件拖放上传", "✓", "✓", "✗"],
      ["导出结果", "✓", "付费", "✗"],
      ["完全免费", "✓", "免费版有限制", "✓"],
    ],
  },
  en: {
    heading: "Diff Shuttle vs Similar Tools (as of 2026-06)",
    columns: ["Feature", "Diff Shuttle", "DiffChecker", "Text-Compare"],
    rows: [
      ["100% Local Processing", "✓", "✗", "✗"],
      ["No Registration Required", "✓", "✗", "✓"],
      ["JSON Diff", "✓", "Paid", "✗"],
      ["CSV Diff", "✓", "✗", "✗"],
      ["Word Diff", "✓", "✓", "✗"],
      ["Character Diff", "✓", "✗", "✗"],
      ["File Drag & Drop", "✓", "✓", "✗"],
      ["Export Results", "✓", "Paid", "✗"],
      ["Completely Free", "✓", "Free tier limited", "✓"],
    ],
  },
};

export const HEADINGS = {
  whoFor: { zh: "谁在使用 Diff Shuttle？", en: "Who is Diff Shuttle for?" },
  whenUse: {
    zh: "何时使用 Diff Shuttle？",
    en: "When should I use Diff Shuttle?",
  },
  faq: { zh: "常见问题", en: "Frequently Asked Questions" },
};

export const aboutFaqData = { FAQS, HOWTOS, COMPARISON };
