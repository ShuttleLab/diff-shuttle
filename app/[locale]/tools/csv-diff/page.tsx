import Link from "next/link";
import type { Metadata } from "next";

const PAGE_URL = "https://diff.shuttlelab.org/tools/csv-diff/";

export function generateMetadata(): Metadata {
  return {
    title: "CSV Diff Tool — Compare CSV Files Online Free | Diff Shuttle",
    description:
      "Compare two CSV files or spreadsheet exports online and spot added, removed, and changed rows instantly. Free, private, and runs entirely in your browser.",
    alternates: {
      canonical: PAGE_URL,
      languages: {
        en: PAGE_URL,
        zh: PAGE_URL,
        "x-default": PAGE_URL,
      },
    },
    openGraph: {
      title: "CSV Diff Tool — Compare CSV Files Online Free | Diff Shuttle",
      description:
        "Compare two CSV files or spreadsheet exports online row by row. Free and private.",
      url: PAGE_URL,
      type: "website",
    },
  };
}

export default function CsvDiffPage() {
  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "How to Compare CSV Files Online for Free",
    description:
      "A complete guide to comparing two CSV files or spreadsheet exports online. Paste or upload both versions and see added, removed, and unchanged rows highlighted instantly in your browser.",
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
    name: "How to Compare CSV Files Online",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        text: "Paste your original CSV into the left box and your modified CSV into the right box, or use Select File to load a .csv file exported from a spreadsheet.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        text: "Select CSV Diff mode. Blank lines are ignored and the two files are compared row by row, so added and removed records stand out. Pick Side by Side or Unified view.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        text: "Read the color-coded result and the statistics, then click Export as Text to save the row-level comparison.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the CSV diff tool free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Diff Shuttle is completely free with no registration, no watermarks, and no limit on how many CSV comparisons you run.",
        },
      },
      {
        "@type": "Question",
        name: "Is my CSV data uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The comparison runs entirely in your browser. Both files are read and compared locally and nothing is sent anywhere, so customer lists, exports, and other sensitive data stay private.",
        },
      },
      {
        "@type": "Question",
        name: "How does CSV diff mode compare the data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CSV Diff mode ignores blank lines and then compares the two files row by row. Each row is treated as a line, so a changed cell makes the whole row appear as one removed line and one added line, which makes it easy to see exactly which records differ.",
        },
      },
      {
        "@type": "Question",
        name: "Should the rows be in the same order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For the clearest result, yes. Because the comparison is row by row, sorting both files by the same key column first lines up matching records and prevents a reordered file from looking like every row changed.",
        },
      },
      {
        "@type": "Question",
        name: "How large a CSV file can I compare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can upload CSV files up to 10 MB per side, which covers tens of thousands of rows. Larger pasted content is limited only by your browser's memory.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download the CSV comparison?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Click Export as Text to download a plain-text report with added rows prefixed by a plus sign, removed rows by a minus sign, and a statistics summary of additions, deletions, and difference percentage.",
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
        name: "CSV Diff Tool",
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
          Compare CSV Files Online Free — Row-by-Row CSV and Spreadsheet Diff
          Checker
        </h1>
        <h1 className="text-4xl font-bold mb-4">CSV Diff Tool</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Compare two CSV files or spreadsheet exports online and see exactly
          which rows changed. Diff Shuttle ignores blank lines and compares your
          data row by row, so added, removed, and modified records are
          highlighted instantly. Free, instant, and fully private — everything
          runs in your browser, so your data never leaves your device.
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
          <h2 className="text-2xl font-bold mb-6">How to Compare CSV Files</h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                1
              </span>
              <div>
                <h3 className="font-semibold">Add Your Two CSV Files</h3>
                <p className="text-muted-foreground">
                  Paste the original CSV into the left box and the modified CSV
                  into the right box. If your data is in a file, use the Select
                  File button or drag and drop a .csv export from Excel, Google
                  Sheets, or a database onto either side. Files are read locally up
                  to 10 MB each, and nothing is uploaded anywhere.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                2
              </span>
              <div>
                <h3 className="font-semibold">Select CSV Diff Mode</h3>
                <p className="text-muted-foreground">
                  Choose CSV Diff from the mode menu. The tool strips out blank
                  lines and then compares the two files row by row, treating each
                  record as a single line. Pick Side by Side to view both files in
                  parallel or Unified for a compact list of changes, and turn on
                  Ignore Whitespace if stray spaces around values are creating
                  noise.
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
                  Read the highlighted output, where added rows are green, removed
                  rows are red, and unchanged rows stay neutral, each with line
                  numbers. Check the statistics panel for additions, deletions, and
                  the difference percentage, then click Export as Text to download a
                  report you can attach to a data review or hand to a colleague.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Use a CSV Diff Tool?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Spot Changed Records Fast</h3>
              <p className="text-sm text-muted-foreground">
                Scanning two exports with hundreds of rows by eye is hopeless. A
                row-by-row diff highlights every added and removed record with line
                numbers, so you can immediately see which entries appeared,
                disappeared, or were edited between the two versions.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Private by Design</h3>
              <p className="text-sm text-muted-foreground">
                Your data is never uploaded. Both files are read and compared
                entirely in your browser, which makes Diff Shuttle safe for
                customer lists, financial exports, and any spreadsheet you cannot
                send to a third-party service.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">No Blank-Line Noise</h3>
              <p className="text-sm text-muted-foreground">
                CSV mode automatically ignores empty lines that exports often leave
                behind, so trailing blank rows do not clutter the comparison and the
                statistics reflect only real data rows.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Free With No Limits</h3>
              <p className="text-sm text-muted-foreground">
                There is no sign-up, no paywall, and no cap on comparisons. Side by
                Side and Unified views plus a text export of the result are all
                included at no cost.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Scenarios</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Comparing Two Data Exports
              </h3>
              <p className="text-muted-foreground">
                When you pull the same report from a system on two different days,
                a row-by-row diff shows exactly which records were added, dropped,
                or changed. Paste both exports into CSV Diff mode and the deltas are
                obvious, turning a painful manual reconciliation into a quick read.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Verifying an Import or Upload</h3>
              <p className="text-muted-foreground">
                Before and after importing a CSV into a tool, compare the source
                file against what the system exported back to confirm nothing was
                dropped or mangled. Because the comparison is local, you can check
                exports containing personal or financial data without exposing it.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Reviewing Edits to a Dataset</h3>
              <p className="text-muted-foreground">
                When a teammate hands back an edited spreadsheet export, you need to
                know which rows they touched. A row-by-row diff highlights every
                changed record so you can review and approve the edits without
                trusting a verbal summary of what changed.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Auditing a Pricing or Config List</h3>
              <p className="text-muted-foreground">
                Lists like price tables, feature flags, or mappings are often kept
                as CSV. Diffing last week&apos;s version against this week&apos;s
                makes every changed entry visible, and the exported report becomes a
                clean audit trail of exactly what moved.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tips and Best Practices</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Sort Both Files the Same Way First
              </h3>
              <p className="text-muted-foreground">
                The comparison is row by row, so two files with identical data in a
                different order will look like everything changed. Sort both exports
                by the same key column before pasting them in to line up matching
                records.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Keep the Header Row in Both Sides
              </h3>
              <p className="text-muted-foreground">
                Leave the header row in place on both files so the first line of
                each side matches. That keeps subsequent row numbers aligned and
                makes the diff easier to map back to your spreadsheet.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Use Ignore Whitespace for Padded Cells
              </h3>
              <p className="text-muted-foreground">
                Some exports add spaces around values. If rows look changed only
                because of stray spacing, turn on Ignore Whitespace so the
                comparison focuses on the actual cell contents.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Read a Changed Row as a Pair</h3>
              <p className="text-muted-foreground">
                When a single cell changes, the whole row shows up as one removed
                line and one added line because rows are compared whole. Read the
                red and green pair together to see exactly which value moved within
                that record.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Export for the Record</h3>
              <p className="text-muted-foreground">
                Once the diff looks right, use Export as Text to save a report with
                plus and minus prefixes and a statistics summary. It is ideal for
                data reviews, reconciliation logs, and sharing results with people
                who do not have the tool open.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Compared to Alternatives</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              Spreadsheets like Excel and Google Sheets can compare data with
              formulas such as VLOOKUP, but building those comparisons is
              time-consuming and error prone, and it falls apart the moment rows
              shift. Diff Shuttle gives you an instant, visual row-by-row diff with
              no formulas to write — paste both files, switch to CSV Diff mode, and
              read the highlighted result.
            </p>
            <p className="text-muted-foreground mb-4">
              Many online CSV comparison tools upload your file to a server, which
              is a problem when the data includes customer records or financial
              figures. Diff Shuttle reads and compares everything locally in your
              browser, so sensitive exports never leave your device, there is no
              account to create, and the text export is free.
            </p>
            <p className="text-muted-foreground mb-4">
              Command-line tools like diff or csvdiff are powerful for engineers
              but require setup and terminal comfort, and they do not give analysts
              a friendly visual result. A browser-based tool makes a quick row-level
              comparison accessible to anyone on the team while still keeping the
              data private.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is the CSV diff tool free?</h3>
              <p className="text-muted-foreground">
                Yes. Diff Shuttle is completely free with no registration, no
                watermarks, and no limit on how many CSV comparisons you run.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Is my CSV data uploaded to a server?
              </h3>
              <p className="text-muted-foreground">
                No. The comparison runs entirely in your browser. Both files are
                read and compared locally and nothing is sent anywhere, so customer
                lists, exports, and other sensitive data stay private.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                How does CSV diff mode compare the data?
              </h3>
              <p className="text-muted-foreground">
                CSV Diff mode ignores blank lines and then compares the two files
                row by row. Each row is treated as a line, so a changed cell makes
                the whole row appear as one removed line and one added line, making
                it easy to see which records differ.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Should the rows be in the same order?
              </h3>
              <p className="text-muted-foreground">
                For the clearest result, yes. Because the comparison is row by row,
                sorting both files by the same key column first lines up matching
                records and prevents a reordered file from looking like every row
                changed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                How large a CSV file can I compare?
              </h3>
              <p className="text-muted-foreground">
                You can upload CSV files up to 10 MB per side, which covers tens of
                thousands of rows. Pasted content is limited only by your
                browser&apos;s available memory.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Can I download the comparison?
              </h3>
              <p className="text-muted-foreground">
                Yes. Click Export as Text to download a plain-text report with
                added rows prefixed by a plus sign, removed rows by a minus sign,
                and a statistics summary of additions, deletions, and difference
                percentage.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center p-8 bg-muted rounded-lg">
          <h2 className="text-xl font-bold mb-2">Ready to Compare Your CSV?</h2>
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
