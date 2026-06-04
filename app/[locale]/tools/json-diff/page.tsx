import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link as LocaleLink } from "@/i18n/navigation";

const PAGE_URL = "https://diff.shuttlelab.org/tools/json-diff/";

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
      title: `${t("jsonDiff.title")} | Diff Shuttle`,
      description: t("jsonDiff.subtitle"),
      alternates: {
        canonical: PAGE_URL,
        languages: { en: PAGE_URL, zh: PAGE_URL, "x-default": PAGE_URL },
      },
    };
  }

  return {
    title: "JSON Diff Tool — Compare JSON Online Free | Diff Shuttle",
    description:
      "Compare two JSON files or API responses online. Both sides are auto-formatted, then diffed line by line so structural changes stand out. Free, private, and instant in your browser.",
    alternates: {
      canonical: PAGE_URL,
      languages: {
        en: PAGE_URL,
        zh: PAGE_URL,
        "x-default": PAGE_URL,
      },
    },
    openGraph: {
      title: "JSON Diff Tool — Compare JSON Online Free | Diff Shuttle",
      description:
        "Compare two JSON files or API responses online with automatic formatting and a clear line-by-line diff. Free and private.",
      url: PAGE_URL,
      type: "website",
    },
  };
}

export default async function JsonDiffPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "zh") {
    const t = await getTranslations("toolPages");
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">{t("jsonDiff.title")}</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t("jsonDiff.subtitle")}
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
          <Link href="/tools/json-diff/" className="hover:underline">
            {t("fullGuide")}
          </Link>
        </p>
      </div>
    );
  }

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "How to Compare JSON Online for Free",
    description:
      "A complete guide to comparing two JSON documents online. Both sides are automatically reformatted with consistent indentation, then diffed line by line so additions, deletions, and unchanged keys are easy to see — all in your browser.",
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
    name: "How to Compare JSON Online",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        text: "Paste your original JSON into the left box and your modified JSON into the right box, or use Select File to load a .json file.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        text: "Select JSON Diff mode. Both sides are parsed and reformatted with consistent two-space indentation before the comparison, so formatting differences disappear and only real changes remain.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        text: "Read the color-coded result in Side by Side or Unified view, check the statistics, then click Export as Text to save the comparison.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the JSON diff tool free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Diff Shuttle is completely free with no registration, no watermarks, and no limit on how many JSON comparisons you run.",
        },
      },
      {
        "@type": "Question",
        name: "Is my JSON uploaded to a server?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The comparison runs entirely in your browser. Both inputs are parsed and compared locally and nothing is sent anywhere, so API responses and config data containing secrets stay private.",
        },
      },
      {
        "@type": "Question",
        name: "Does it format my JSON before comparing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. JSON Diff mode parses both sides and reformats them with consistent two-space indentation before diffing. That means minified versus pretty-printed JSON will not show up as differences — only real changes to keys and values do.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if my JSON is invalid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If either side fails to parse, the tool gracefully falls back to a plain line-by-line text comparison so you still get a useful diff. For the cleanest result, fix syntax errors so both sides are valid JSON first.",
        },
      },
      {
        "@type": "Question",
        name: "Can it compare nested objects and arrays?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. After reformatting, nested structures are expanded onto separate lines, so changes deep inside objects or arrays appear as clearly highlighted added and removed lines.",
        },
      },
      {
        "@type": "Question",
        name: "Can I download the JSON comparison?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Click Export as Text to download a plain-text report with added lines prefixed by a plus sign, removed lines by a minus sign, and a statistics summary of additions, deletions, and difference percentage.",
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
        name: "JSON Diff Tool",
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
          Compare JSON Online Free — Auto-Formatting JSON Diff Checker for API
          Responses and Config Files
        </h1>
        <h1 className="text-4xl font-bold mb-4">JSON Diff Tool</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Compare two JSON documents online and see exactly what changed. Diff
          Shuttle parses and reformats both sides with consistent indentation
          first, so minified versus pretty-printed noise disappears and only
          real changes to keys and values are highlighted. Perfect for API
          responses and config files. Free, instant, and fully private —
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
          <h2 className="text-2xl font-bold mb-6">How to Compare JSON</h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                1
              </span>
              <div>
                <h3 className="font-semibold">Add Your Two JSON Documents</h3>
                <p className="text-muted-foreground">
                  Paste the original JSON into the left box and the modified JSON
                  into the right box. If your data lives in a file, use the Select
                  File button or drag and drop a .json file onto either side.
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
                <h3 className="font-semibold">Select JSON Diff Mode</h3>
                <p className="text-muted-foreground">
                  Choose JSON Diff from the mode menu. Both sides are parsed and
                  reformatted with consistent two-space indentation before the
                  comparison runs, so a minified payload and a pretty-printed one
                  with the same data show no differences. Pick Side by Side or
                  Unified view to suit how you like to read.
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
                  Read the highlighted output, where added lines are green,
                  removed lines are red, and unchanged lines stay neutral, each
                  with line numbers. Check the statistics panel for additions,
                  deletions, and the difference percentage, then click Export as
                  Text to download a report you can attach to a bug report or
                  share with your team.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Use a JSON Diff Tool?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Formatting Noise Disappears
              </h3>
              <p className="text-sm text-muted-foreground">
                Because both sides are reformatted before diffing, a minified
                response and an indented one with the same content match perfectly.
                You see only genuine changes to keys and values, not differences in
                whitespace or line breaks.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Private by Design</h3>
              <p className="text-sm text-muted-foreground">
                Your JSON is never uploaded. Both inputs are parsed and compared
                entirely in your browser, which makes Diff Shuttle safe for API
                responses, tokens, and configuration data you cannot send to a
                third-party service.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Nested Changes Made Clear</h3>
              <p className="text-sm text-muted-foreground">
                Reformatting expands nested objects and arrays onto separate
                lines, so a change buried several levels deep shows up as a clearly
                highlighted line instead of being hidden in a long single-line
                blob.
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
                Comparing Two API Responses
              </h3>
              <p className="text-muted-foreground">
                When an endpoint returns something unexpected, you often have a
                known-good response and the new one in hand. Paste both into JSON
                Diff mode and the changed fields light up instantly, even if one
                payload is minified and the other is pretty-printed. This turns a
                tedious manual scan of two long blobs into a few seconds of
                reading.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Reviewing Config File Changes
              </h3>
              <p className="text-muted-foreground">
                A misbehaving service is frequently caused by one altered value in
                a JSON config. Drop the previous and current versions into the
                tool, and the added, removed, or changed keys are obvious. Because
                everything stays local, you can safely diff configs that hold
                credentials or internal endpoints.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Validating a Data Migration</h3>
              <p className="text-muted-foreground">
                After transforming or migrating data, compare a record before and
                after to confirm only the intended fields changed. The difference
                percentage and the highlighted lines give you a fast, reliable
                sanity check before you trust the migration at scale.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Checking Package or Lock Files</h3>
              <p className="text-muted-foreground">
                JSON manifests such as package.json and similar files change often,
                and not every edit is intentional. A quick diff shows exactly which
                dependencies or settings moved, so you can confirm an update did
                what you expected before committing.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tips and Best Practices</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Make Sure Both Sides Are Valid JSON
              </h3>
              <p className="text-muted-foreground">
                JSON Diff mode shines when both inputs parse cleanly, because that
                is what lets it normalize formatting. If a side has a syntax error,
                the tool falls back to a plain text diff, so fix the error first
                for the clearest result.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Paste Minified JSON Without Worry
              </h3>
              <p className="text-muted-foreground">
                You do not need to pretty-print anything yourself. Drop minified
                JSON straight from an API call and the tool reformats it
                automatically, so a one-line payload becomes a readable,
                line-by-line comparison.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Use Side by Side for Big Objects</h3>
              <p className="text-muted-foreground">
                For large documents, Side by Side view keeps the two versions
                aligned so you can scan corresponding sections together. Switch to
                Unified for a compact, patch-style read when only a few keys
                changed.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Mind Key Order</h3>
              <p className="text-muted-foreground">
                Reformatting preserves the order of keys as written, so two objects
                with the same data but different key order may show differences. If
                that is noise for you, sort keys consistently in both inputs before
                comparing.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Export for the Record</h3>
              <p className="text-muted-foreground">
                Once the diff looks right, use Export as Text to save a report with
                plus and minus prefixes and a statistics summary. It is handy for
                attaching to a bug report or sharing the exact change with someone
                who does not have the tool open.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Compared to Alternatives</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              Many online JSON diff tools upload your data to a server to process
              it, which is a real concern when the payload contains tokens, user
              records, or internal configuration. Diff Shuttle parses and compares
              everything locally in your browser, so sensitive JSON never leaves
              your device, there is no account to create, and the auto-formatting
              and text export are free.
            </p>
            <p className="text-muted-foreground mb-4">
              You can pretty-print two payloads by hand and run a generic text
              diff, but that is fiddly and easy to get wrong — one stray indent and
              the whole comparison turns to noise. Diff Shuttle does the
              normalization for you, reformatting both sides with consistent
              indentation before diffing so the result reflects content, not
              formatting.
            </p>
            <p className="text-muted-foreground mb-4">
              Command-line tools like jq combined with diff are powerful for
              developers but require setup and comfort in the terminal. For a quick
              visual comparison of two responses you already have on the clipboard,
              a browser tool is faster and works for non-developers too, while still
              keeping your data private.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Is the JSON diff tool free?</h3>
              <p className="text-muted-foreground">
                Yes. Diff Shuttle is completely free with no registration, no
                watermarks, and no limit on how many JSON comparisons you run.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Is my JSON uploaded to a server?
              </h3>
              <p className="text-muted-foreground">
                No. The comparison runs entirely in your browser. Both inputs are
                parsed and compared locally and nothing is sent anywhere, so API
                responses and config data with secrets stay private.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Does it format my JSON before comparing?
              </h3>
              <p className="text-muted-foreground">
                Yes. JSON Diff mode parses both sides and reformats them with
                consistent two-space indentation before diffing, so minified versus
                pretty-printed JSON will not show as differences — only real
                changes do.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                What happens if my JSON is invalid?
              </h3>
              <p className="text-muted-foreground">
                If either side fails to parse, the tool gracefully falls back to a
                plain line-by-line text comparison so you still get a useful diff.
                Fix syntax errors so both sides are valid JSON for the cleanest
                result.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Can it compare nested objects and arrays?
              </h3>
              <p className="text-muted-foreground">
                Yes. After reformatting, nested structures are expanded onto
                separate lines, so changes deep inside objects or arrays appear as
                clearly highlighted added and removed lines.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Can I download the comparison?
              </h3>
              <p className="text-muted-foreground">
                Yes. Click Export as Text to download a plain-text report with
                added lines prefixed by a plus sign, removed lines by a minus sign,
                and a statistics summary of additions, deletions, and difference
                percentage.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center p-8 bg-muted rounded-lg">
          <h2 className="text-xl font-bold mb-2">Ready to Compare Your JSON?</h2>
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
