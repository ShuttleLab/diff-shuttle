import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link as LocaleLink } from "@/i18n/navigation";

const PAGE_URL = "https://diff.shuttlelab.org/tools/code-diff/";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "zh") {
    const t = await getTranslations({ locale, namespace: "toolPages" });
    return {
      title: `${t("codeDiff.title")} | Diff Shuttle`,
      description: t("codeDiff.subtitle"),
      alternates: {
        canonical: PAGE_URL,
        languages: { en: PAGE_URL, zh: PAGE_URL, "x-default": PAGE_URL },
      },
    };
  }

  return {
    title: "Code Diff Tool — Compare Code Online Free | Diff Shuttle",
    description:
      "Compare two code snippets or source files online and see every added, removed, and unchanged line. Free, private, and instant — your code never leaves your browser.",
    alternates: {
      canonical: PAGE_URL,
      languages: {
        en: PAGE_URL,
        zh: PAGE_URL,
        "x-default": PAGE_URL,
      },
    },
    openGraph: {
      title: "Code Diff Tool — Compare Code Online Free | Diff Shuttle",
      description:
        "Compare two code snippets or source files online and see every change line by line. Free and private.",
      url: PAGE_URL,
      type: "website",
    },
  };
}

export default async function CodeDiffPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "zh") {
    const t = await getTranslations("toolPages");
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">{t("codeDiff.title")}</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t("codeDiff.subtitle")}
        </p>
        <div className="text-center p-8 bg-muted rounded-lg">
          <LocaleLink
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            {t("openTool")}
          </LocaleLink>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          <Link href="/tools/code-diff/" className="hover:underline">
            {t("fullGuide")}
          </Link>
        </p>
      </div>
    );
  }

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "How to Compare Code Online for Free",
    description:
      "A complete guide to comparing two code snippets or source files online. Paste or upload both versions and see additions, deletions, and unchanged lines highlighted instantly in your browser.",
    author: { "@type": "Organization", name: "ShuttleLab" },
    publisher: {
      "@type": "Organization",
      name: "ShuttleLab",
      url: "https://shuttlelab.org",
    },
    url: PAGE_URL,
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Compare Code Online",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        text: "Paste your original code into the left box and your modified code into the right box, or use Select File to load a source file such as .js, .ts, .py, .java, .go, or any supported extension.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        text: "Keep Text Diff mode for line-by-line comparison and pick Side by Side or Unified view. Toggle Ignore Whitespace so reindentation does not create noise.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        text: "Read the color-coded result and the statistics, then click Export as Text to save the comparison for a code review or commit note.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the code diff tool free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Diff Shuttle is completely free with no registration, no watermarks, and no limit on how many code comparisons you run.",
        },
      },
      {
        "@type": "Question",
        name: "Is my code uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The comparison runs entirely in your browser. Both files are read locally and nothing is sent anywhere, so proprietary or unreleased source code stays private.",
        },
      },
      {
        "@type": "Question",
        name: "Which programming languages and file types are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can compare any plain-text source file, including .js, .jsx, .ts, .tsx, .py, .java, .c, .cpp, .h, .go, .rs, .php, .rb, .swift, .kt, .sql, .sh, .html, .css, .xml, .yaml, .toml, and more. The diff is language-agnostic and works on any code as text.",
        },
      },
      {
        "@type": "Question",
        name: "Can I ignore indentation and whitespace changes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Turn on Ignore Whitespace so reindentation, tab-versus-space changes, and trailing spaces are ignored and you only see real logic changes.",
        },
      },
      {
        "@type": "Question",
        name: "How large a code file can I compare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can upload source files up to 10 MB per side, which covers nearly any single file. Larger pasted content is limited only by your browser's memory.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download the code comparison?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Click Export as Text to download a unified plain-text report with added lines prefixed by a plus sign, removed lines by a minus sign, and a statistics summary you can paste into a pull request or commit message.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://diff.shuttlelab.org/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Code Diff Tool",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="sr-only">
          Compare Code Online Free — Line-by-Line Source Code Diff Checker for
          Any Language
        </h1>
        <h1 className="text-4xl font-bold mb-4">Code Diff Tool</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Compare two code snippets or source files online and see exactly what
          changed. Paste or upload both versions and get a clear, color-coded,
          line-by-line diff for any language — JavaScript, TypeScript, Python,
          Java, Go, Rust, C, C++, PHP, Ruby, SQL, and dozens more. Free,
          instant, and fully private, because everything runs in your browser.
        </p>

        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Try It Now — It&apos;s Free
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Compare Code</h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                1
              </span>
              <div>
                <h3 className="font-semibold">
                  Add Your Two Versions of the Code
                </h3>
                <p className="text-muted-foreground">
                  Paste the original code into the left box and the modified code
                  into the right box. If your code lives in a file, use the Select
                  File button or drag and drop a supported source file such as
                  .js, .ts, .py, .java, .go, .rs, .php, or .sql onto either side.
                  Files are read locally up to 10 MB each, and nothing is uploaded
                  anywhere.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                2
              </span>
              <div>
                <h3 className="font-semibold">Choose View and Options</h3>
                <p className="text-muted-foreground">
                  Keep the default line-by-line Text Diff mode, which is exactly
                  what code review needs, and pick Side by Side to read both files
                  in parallel or Unified for a compact patch-style view. Turn on
                  Ignore Whitespace so a reformat or reindent does not bury the
                  real logic change, and use Ignore Case for case-insensitive
                  comparison when that matters.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                3
              </span>
              <div>
                <h3 className="font-semibold">Review and Export</h3>
                <p className="text-muted-foreground">
                  Read the highlighted output, where added lines appear in green,
                  removed lines in red, and unchanged lines stay neutral, each with
                  its old and new line numbers. Check the statistics panel for
                  additions, deletions, and the difference percentage, then click
                  Export as Text to download a patch-style report for a pull
                  request, code review, or commit note.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Use a Code Diff Tool?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">See Every Logic Change</h3>
              <p className="text-sm text-muted-foreground">
                Reading two versions of a function by eye is slow and risky. A
                line-by-line diff highlights every added and removed line with
                line numbers, so you can pinpoint exactly which statements changed
                and review with confidence before you merge or deploy.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Private by Design</h3>
              <p className="text-sm text-muted-foreground">
                Your source code is never uploaded. Both versions are read and
                compared entirely in your browser, which makes Diff Shuttle safe
                for proprietary algorithms, unreleased features, and any code you
                are not allowed to paste into a remote service.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Works With Any Language</h3>
              <p className="text-sm text-muted-foreground">
                The diff treats code as text, so it works for JavaScript, Python,
                Go, Rust, Java, C, C++, PHP, Ruby, SQL, shell scripts, and
                everything in between. One tool covers your whole stack without
                language-specific setup.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Free With No Limits</h3>
              <p className="text-sm text-muted-foreground">
                There is no sign-up, no paywall, and no cap on comparisons. Ignore
                Whitespace, Ignore Case, Side by Side and Unified views, and a text
                export are all included at no cost.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Scenarios</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Reviewing a Change Before Merge
              </h3>
              <p className="text-muted-foreground">
                When someone sends you a revised file outside of version control,
                you still need to know precisely what they touched. Paste the old
                and new code into Diff Shuttle, switch to Side by Side, and every
                added and removed line stands out with line numbers. Reviewers
                approve faster and never miss a sneaky change that slipped in
                alongside the intended fix.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Diffing Two Config or Script Files
              </h3>
              <p className="text-muted-foreground">
                Two environments behaving differently often comes down to one line
                in a YAML, TOML, .ini, or shell file. Drop both files into the
                tool, enable Ignore Whitespace, and the changed line is obvious.
                Because the comparison is local, you can safely diff production
                configuration and deploy scripts without exposing them.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Comparing Code From Two Sources
              </h3>
              <p className="text-muted-foreground">
                When you copy a snippet from documentation, a forum answer, or an
                AI assistant and want to know how it differs from your current
                implementation, a quick paste-and-diff shows the gap instantly.
                The difference percentage gives a fast read on how far apart the
                two versions really are.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Resolving a Lost Edit</h3>
              <p className="text-muted-foreground">
                If you have two copies of a file and are not sure which one
                contains your latest work, diff them to see which edits exist
                where. Use Swap to flip the sides if the additions and deletions
                look reversed, then export the result so you have a record of what
                you kept.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tips and Best Practices</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Always Try Ignore Whitespace on Reformatted Code
              </h3>
              <p className="text-muted-foreground">
                Auto-formatters like Prettier, Black, or gofmt can rewrite
                indentation across an entire file. Turning on Ignore Whitespace
                strips that noise so you see only the lines whose actual content
                changed.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Use Unified View for Patch-Style Review
              </h3>
              <p className="text-muted-foreground">
                Unified view stacks additions and deletions in one column with
                both line numbers, which reads like a Git patch and is compact for
                long files with scattered edits. Side by Side is better when you
                want to read two complete versions in parallel.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Load Files by Their Real Extension
              </h3>
              <p className="text-muted-foreground">
                Selecting or dropping a file with its native extension (.ts, .py,
                .go, and so on) keeps your content intact and avoids the
                unsupported format warning. The tool reads it as text, so the
                language does not change how the diff works.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Export the Diff Into Your Review</h3>
              <p className="text-muted-foreground">
                Use Export as Text to capture a patch-style report with plus and
                minus prefixes and a statistics summary. Paste it into a pull
                request description, a commit message, or a ticket so teammates can
                follow the change even without opening the tool.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Diff One File at a Time</h3>
              <p className="text-muted-foreground">
                The tool compares two text inputs, so review changes file by file
                rather than pasting an entire repository at once. Smaller, focused
                comparisons are easier to read and make the statistics far more
                meaningful.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Compared to Alternatives</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              The git diff command is the gold standard for tracked code, but it
              only helps when both versions already live in a repository and you
              are comfortable in the terminal. For two loose snippets, a file a
              colleague emailed, or code you pasted from a chat, Diff Shuttle is
              faster: paste both sides, read the color-coded result, and you are
              done — no repo, no staging, no command-line flags.
            </p>
            <p className="text-muted-foreground mb-4">
              Diffchecker.com is a popular web tool, and it works, but its free
              tier processes your code on a remote server and pushes you toward a
              paid plan for larger files and extra features. Diff Shuttle runs the
              entire comparison locally in your browser, so your source code never
              leaves your machine, there is no account to create, and every option
              including the text export is free.
            </p>
            <p className="text-muted-foreground mb-4">
              Editors like VS Code can compare two files, but you first have to
              save both versions to disk and open the editor, which is overkill
              for a quick check. A browser-based diff keeps the workflow
              lightweight while still giving you line numbers, side-by-side and
              unified views, and full privacy.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is the code diff tool free?</h3>
              <p className="text-muted-foreground">
                Yes. Diff Shuttle is completely free with no registration, no
                watermarks, and no limit on how many code comparisons you run.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Is my code uploaded to a server?
              </h3>
              <p className="text-muted-foreground">
                No. The comparison runs entirely in your browser. Both files are
                read locally and nothing is ever sent to a server, so proprietary
                and unreleased source code stays private.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Which languages and file types are supported?
              </h3>
              <p className="text-muted-foreground">
                Any plain-text source file works, including .js, .jsx, .ts, .tsx,
                .py, .java, .c, .cpp, .h, .go, .rs, .php, .rb, .swift, .kt, .sql,
                .sh, .html, .css, .xml, .yaml, .toml, and more. The diff is
                language-agnostic and treats your code as text.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Can I ignore indentation and whitespace changes?
              </h3>
              <p className="text-muted-foreground">
                Yes. Turn on Ignore Whitespace so reindentation, tab-versus-space
                changes, and trailing spaces are ignored and you see only the
                lines where real logic changed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                How large a code file can I compare?
              </h3>
              <p className="text-muted-foreground">
                You can upload source files up to 10 MB per side, which covers
                nearly any single file. Pasted content is limited only by your
                browser&apos;s available memory.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Can I download the comparison?
              </h3>
              <p className="text-muted-foreground">
                Yes. Click Export as Text to download a patch-style report with
                added lines prefixed by a plus sign, removed lines by a minus
                sign, and a statistics summary you can paste into a pull request
                or commit message.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center p-8 bg-muted rounded-lg">
          <h2 className="text-xl font-bold mb-2">Ready to Compare Your Code?</h2>
          <p className="text-muted-foreground mb-4">
            Free, instant, and 100% private. No registration required.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Start Comparing Now
          </Link>
        </div>
      </div>
    </>
  );
}
