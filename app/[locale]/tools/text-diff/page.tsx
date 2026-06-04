import Link from "next/link";
import type { Metadata } from "next";

const PAGE_URL = "https://diff.shuttlelab.org/tools/text-diff/";

export function generateMetadata(): Metadata {
  return {
    title: "Text Diff Tool — Compare Two Texts Online Free | Diff Shuttle",
    description:
      "Compare two texts online and spot every difference line by line, word by word, or character by character. Free, private, and instant — text never leaves your browser.",
    alternates: {
      canonical: PAGE_URL,
      languages: {
        en: PAGE_URL,
        zh: PAGE_URL,
        "x-default": PAGE_URL,
      },
    },
    openGraph: {
      title: "Text Diff Tool — Compare Two Texts Online Free | Diff Shuttle",
      description:
        "Compare two texts online and spot every difference line by line, word by word, or character by character. Free and private.",
      url: PAGE_URL,
      type: "website",
    },
  };
}

export default function TextDiffPage() {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "How to Compare Two Texts Online for Free",
    description:
      "A complete guide to comparing two pieces of text online. Paste or upload both versions and see additions, deletions, and unchanged lines highlighted instantly in your browser.",
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
    name: "How to Compare Two Texts Online",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        text: "Paste your original text into the left box and your modified text into the right box, or use Select File to load a .txt file.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        text: "Choose Text Diff mode and pick Side by Side or Unified view. Toggle Ignore Whitespace or Ignore Case if needed.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        text: "Read the color-coded result and the statistics, then click Export as Text to save the comparison.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the text diff tool free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Diff Shuttle is completely free with no registration, no watermarks, and no limits on how many comparisons you run.",
        },
      },
      {
        "@type": "Question",
        name: "Is my text uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The comparison runs entirely in your browser. Both files are read locally and nothing is ever sent to a server, so your text stays private.",
        },
      },
      {
        "@type": "Question",
        name: "Can I ignore whitespace or letter case?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Diff Shuttle has an Ignore Whitespace toggle and an Ignore Case toggle so you can focus only on meaningful differences.",
        },
      },
      {
        "@type": "Question",
        name: "How large a file can I compare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can upload text files up to 10 MB per side. Larger pasted content is limited only by your browser's memory.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between line, word, and character diff?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Text Diff compares line by line, Word Diff highlights individual changed words, and Character Diff marks the exact characters that changed. Pick the granularity that matches your task.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download the comparison?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Click Export as Text to download a plain-text report that includes every changed line plus a statistics summary of additions, deletions, unchanged lines, and difference percentage.",
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
        name: "Text Diff Tool",
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
          Compare Two Texts Online Free — Line, Word, and Character Text Diff
          Checker
        </h1>
        <h1 className="text-4xl font-bold mb-4">Text Diff Tool</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Compare two texts online and see exactly what changed. Paste or upload
          both versions and get a clear, color-coded diff line by line, word by
          word, or character by character. Free, instant, and fully private —
          everything runs in your browser.
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
          <h2 className="text-2xl font-bold mb-6">How to Compare Two Texts</h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                1
              </span>
              <div>
                <h3 className="font-semibold">Add Your Two Versions</h3>
                <p className="text-muted-foreground">
                  Paste your original text into the left box and your modified
                  text into the right box. If your content lives in a file, use
                  the Select File button or drag and drop a supported text file
                  onto either side. Files are read locally up to 10 MB each, and
                  nothing is uploaded anywhere.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                2
              </span>
              <div>
                <h3 className="font-semibold">Choose Mode and Options</h3>
                <p className="text-muted-foreground">
                  Keep the default Text Diff mode for line-by-line comparison, or
                  switch to Word or Character mode for finer detail. Pick Side by
                  Side or Unified view, and flip the Ignore Whitespace or Ignore
                  Case toggles so trivial formatting changes do not clutter the
                  result.
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
                  Read the highlighted output, where additions, deletions, and
                  unchanged lines are color coded, and check the statistics panel
                  for additions, deletions, unchanged lines, and the difference
                  percentage. Click Export as Text to download a plain-text
                  report you can share or archive.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Use a Text Diff Tool?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Spot Every Change Instantly</h3>
              <p className="text-sm text-muted-foreground">
                Scanning two documents by eye is slow and error prone. A diff
                highlights every added, removed, and unchanged line, so you can
                see at a glance what is different between two versions without
                missing a single edit.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Completely Private</h3>
              <p className="text-sm text-muted-foreground">
                Your text is never uploaded. Both versions are read and compared
                entirely in your browser, which makes Diff Shuttle safe for
                contracts, drafts, internal notes, and any confidential material
                you cannot send to a third-party server.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Adjustable Granularity</h3>
              <p className="text-sm text-muted-foreground">
                Compare line by line for structural changes, word by word for
                copy edits, or character by character for the tiniest typo. One
                tool covers proofreading, version review, and precise text
                analysis without switching apps.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Free With No Limits</h3>
              <p className="text-sm text-muted-foreground">
                There is no sign-up, no paywall, and no cap on how many
                comparisons you run. Ignore-whitespace and ignore-case options
                plus a text export are all included at no cost.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Scenarios</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Proofreading Document Revisions
              </h3>
              <p className="text-muted-foreground">
                When a colleague returns an edited draft without tracked changes,
                it is hard to know what they actually touched. Paste the old and
                new versions into Diff Shuttle, switch to Word Diff, and every
                rewritten sentence and reworded phrase lights up. Reviewers save
                time and never accidentally approve a change they did not notice,
                which matters for legal, marketing, and editorial work alike.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Comparing Config or Log Files</h3>
              <p className="text-muted-foreground">
                Two environments behaving differently often comes down to a
                single line in a configuration or log file. Drop both text files
                into the tool, enable Ignore Whitespace, and the line that
                changed stands out immediately. Because the comparison is local,
                you can safely diff sensitive production configuration without
                exposing it to any external service.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Checking Pasted Content Copies</h3>
              <p className="text-muted-foreground">
                Translators, writers, and support agents frequently paste text
                between tools and need to confirm nothing was dropped or
                duplicated. A quick line-by-line diff verifies that the copied
                version matches the source exactly, and the difference percentage
                gives a fast sanity check before publishing or sending.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tips and Best Practices</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Use Ignore Whitespace for Reformatted Text
              </h3>
              <p className="text-muted-foreground">
                If one version was reindented or had trailing spaces added, the
                raw diff can be noisy. Turn on Ignore Whitespace so the tool
                focuses on real content changes instead of invisible formatting.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Match Mode to the Task</h3>
              <p className="text-muted-foreground">
                Use Text Diff for whole-line changes, Word Diff when only a few
                words moved inside long paragraphs, and Character Diff to catch
                single-character typos. The right mode makes the result far
                easier to read.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Try Both View Modes</h3>
              <p className="text-muted-foreground">
                Side by Side is best for reading two versions in parallel, while
                Unified view is compact and great for long documents with only a
                few scattered edits. Switch between them to find what reads best.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Use Swap to Check Direction</h3>
              <p className="text-muted-foreground">
                If additions and deletions look reversed, click Swap to flip the
                original and modified sides. This is handy when you are not sure
                which pasted version is the newer one.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Export for the Record</h3>
              <p className="text-muted-foreground">
                Once the diff looks right, use Export as Text to save a report.
                It captures every changed line and a statistics summary, which is
                useful for change logs, audits, and sharing results with people
                who do not have the tool open.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Compared to Alternatives</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              Diffchecker.com is the best known online text comparison tool, and
              it works well, but its free tier asks you to paste content into a
              service that processes it remotely and nudges you toward a paid
              plan for larger files and extra features. Diff Shuttle runs the
              entire comparison in your browser, so your text never leaves your
              device, there is no account to create, and every option including
              text export is free.
            </p>
            <p className="text-muted-foreground mb-4">
              The local diff command on Linux and macOS is powerful for
              developers but lives in the terminal and has a learning curve that
              casual users do not want to climb. Diff Shuttle gives you the same
              line-by-line clarity with a visual, color-coded interface, plus
              word and character granularity, without needing to install anything
              or remember command-line flags.
            </p>
            <p className="text-muted-foreground mb-4">
              Editors like VS Code can compare two files, but you first have to
              save both versions to disk and open the editor. For a quick
              comparison of text you already have on your clipboard, a
              browser-based tool is faster: paste both sides, read the result,
              and you are done. Diff Shuttle keeps that workflow lightweight
              while still being completely private.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is the text diff tool free?</h3>
              <p className="text-muted-foreground">
                Yes. Diff Shuttle is completely free with no registration, no
                watermarks, and no limits on how many comparisons you run.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Is my text uploaded to a server?
              </h3>
              <p className="text-muted-foreground">
                No. The comparison runs entirely in your browser. Both files are
                read locally and nothing is ever sent to a server, so your text
                stays private even for confidential documents.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Can I ignore whitespace or letter case?
              </h3>
              <p className="text-muted-foreground">
                Yes. There is an Ignore Whitespace toggle and an Ignore Case
                toggle so you can focus only on the differences that matter and
                hide trivial formatting noise.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                How large a file can I compare?
              </h3>
              <p className="text-muted-foreground">
                You can upload text files up to 10 MB per side. Pasted content is
                limited only by your browser&apos;s available memory.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                What is the difference between line, word, and character diff?
              </h3>
              <p className="text-muted-foreground">
                Text Diff compares line by line, Word Diff highlights individual
                changed words, and Character Diff marks the exact characters that
                changed. Choose the granularity that fits your task.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I download the result?</h3>
              <p className="text-muted-foreground">
                Yes. Click Export as Text to download a plain-text report that
                includes every changed line plus a statistics summary of
                additions, deletions, unchanged lines, and difference percentage.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center p-8 bg-muted rounded-lg">
          <h2 className="text-xl font-bold mb-2">
            Ready to Compare Your Text?
          </h2>
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
