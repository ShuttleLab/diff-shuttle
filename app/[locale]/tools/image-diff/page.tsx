import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link as LocaleLink } from "@/i18n/navigation";

const PAGE_URL = "https://diff.shuttlelab.org/tools/image-diff/";

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
      title: `${t("imageDiff.title")} | Diff Shuttle`,
      description: t("imageDiff.subtitle"),
      alternates: {
        canonical: PAGE_URL,
        languages: { en: PAGE_URL, zh: PAGE_URL, "x-default": PAGE_URL },
      },
    };
  }

  return {
    title: "Image Diff — Compare Images Online (Coming Soon) | Diff Shuttle",
    description:
      "A visual image comparison tool is on the Diff Shuttle roadmap. Learn what image diffing is, when to use it, and how our free, private text and code diff tools can help today.",
    alternates: {
      canonical: PAGE_URL,
      languages: {
        en: PAGE_URL,
        zh: PAGE_URL,
        "x-default": PAGE_URL,
      },
    },
    openGraph: {
      title: "Image Diff — Compare Images Online (Coming Soon) | Diff Shuttle",
      description:
        "Visual image comparison is on the Diff Shuttle roadmap. Learn what image diffing is and how our free text and code diff tools help today.",
      url: PAGE_URL,
      type: "website",
    },
  };
}

export default async function ImageDiffPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (locale === "zh") {
    const t = await getTranslations("toolPages");
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">{t("imageDiff.title")}</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {t("imageDiff.subtitle")}
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
          <Link href="/tools/image-diff/" className="hover:underline">
            {t("fullGuide")}
          </Link>
        </p>
      </div>
    );
  }

  const techArticleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "What Is Image Diffing and How to Compare Images",
    description:
      "An explainer on image diffing — comparing two images to find visual differences — including how it works, when it is useful, and what Diff Shuttle offers today while a dedicated image comparison feature is in development.",
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
    name: "How to Compare Images While Image Diff Is in Development",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        text: "Image comparison is not yet available in Diff Shuttle. For now, if your images come with associated text such as SVG markup or base64 data, copy that text from each version.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        text: "Open the Diff Shuttle home page and paste the original markup on the left and the modified markup on the right, then choose Text Diff mode.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        text: "Review the highlighted differences in the source, and check back for the dedicated visual image diff feature that is on the roadmap.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can Diff Shuttle compare images right now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not yet. A visual image comparison feature is on our roadmap. Today, Diff Shuttle compares text and code, including image-related source such as SVG markup or base64 strings, which you can diff line by line.",
        },
      },
      {
        "@type": "Question",
        name: "What is image diffing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Image diffing means comparing two images to find where they differ visually. It is commonly used for UI regression testing, design reviews, and confirming whether a screenshot changed between two versions of a website or app.",
        },
      },
      {
        "@type": "Question",
        name: "Can I compare SVG files today?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, as text. SVG files are XML, so you can paste two SVG documents into the home page and use Text Diff mode to see exactly which paths, shapes, or attributes changed in the markup.",
        },
      },
      {
        "@type": "Question",
        name: "Will image diff be free and private like the text tools?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "That is the goal. Diff Shuttle runs every comparison locally in your browser with nothing uploaded, and the planned image feature is intended to follow the same free, private, no-account approach.",
        },
      },
      {
        "@type": "Question",
        name: "What can I use Diff Shuttle for in the meantime?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can compare text, source code, JSON, and CSV right now. These cover most everyday comparison needs, and they all run privately in your browser with a free text export of the result.",
        },
      },
      {
        "@type": "Question",
        name: "How will I know when image diff launches?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Keep this page bookmarked and revisit Diff Shuttle. When the dedicated visual image comparison feature ships, this page will be updated with full instructions for uploading and comparing images.",
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
        name: "Image Diff",
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
          Image Diff — Compare Images Online (Visual Image Comparison Coming
          Soon to Diff Shuttle)
        </h1>
        <h1 className="text-4xl font-bold mb-4">Image Diff</h1>
        <p className="text-lg text-muted-foreground mb-8">
          A dedicated visual image comparison tool is on the Diff Shuttle
          roadmap, but it is not available yet. We would rather be honest than
          ship a half-built feature. In the meantime, this page explains what
          image diffing is, when it helps, and how the free, private text and
          code diff tools Diff Shuttle already offers can cover related
          comparison work today.
        </p>

        <div className="mb-12 inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-full text-sm font-medium">
          Visual image comparison is in development — not available yet
        </div>

        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Use the Text &amp; Code Diff Tools — Free
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            How to Compare Images While This Feature Is in Development
          </h2>
          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                1
              </span>
              <div>
                <h3 className="font-semibold">Reach for the Source, Not the Pixels</h3>
                <p className="text-muted-foreground">
                  Diff Shuttle cannot yet compare rendered pixels, but many images
                  carry text you can compare today. SVG graphics are XML markup, and
                  images embedded in code often appear as base64 strings. Copy the
                  original markup or string and the modified one so you have both
                  versions ready.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                2
              </span>
              <div>
                <h3 className="font-semibold">Paste Into the Text Diff</h3>
                <p className="text-muted-foreground">
                  Open the Diff Shuttle home page, paste the original on the left
                  and the modified version on the right, and choose Text Diff mode.
                  For SVG, this surfaces exactly which paths, shapes, fills, and
                  attributes changed — often more precise than eyeballing a rendered
                  picture.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                3
              </span>
              <div>
                <h3 className="font-semibold">Review and Check Back</h3>
                <p className="text-muted-foreground">
                  Read the color-coded differences, export them if you need a record,
                  and bookmark this page. When the dedicated visual image diff feature
                  ships, this page will be updated with full upload-and-compare
                  instructions for raster images.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Image Diffing Matters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Catch UI Regressions</h3>
              <p className="text-sm text-muted-foreground">
                Visual image comparison is the backbone of UI regression testing.
                By diffing a baseline screenshot against a new build, teams catch
                unintended layout shifts and styling breaks that automated logic
                tests miss entirely.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Speed Up Design Reviews</h3>
              <p className="text-sm text-muted-foreground">
                When a design is iterated, reviewers need to know what actually
                moved. A side-by-side or overlay image diff highlights the changed
                regions so feedback focuses on real differences rather than guesses.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Privacy You Can Trust</h3>
              <p className="text-sm text-muted-foreground">
                Everything Diff Shuttle does today runs locally in your browser with
                nothing uploaded. The planned image feature is intended to follow the
                same approach, so sensitive mockups and screenshots would stay on
                your device.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Honest, Free, No Account</h3>
              <p className="text-sm text-muted-foreground">
                We will not list a feature as live before it works. The existing
                text, code, JSON, and CSV tools are already free with no sign-up, and
                image diff is intended to ship the same way when it is ready.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Common Scenarios</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Comparing Two SVG Icons</h3>
              <p className="text-muted-foreground">
                Designers and developers often need to know how two versions of an
                SVG icon differ. Because SVG is text, you can paste both into Text
                Diff mode today and see precisely which path data, viewBox, or color
                attributes changed — a level of detail a purely visual comparison
                would never reveal.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Screenshot Regression Testing</h3>
              <p className="text-muted-foreground">
                A classic image-diff use case is comparing a baseline screenshot to
                a fresh build to catch visual regressions. This is the workflow the
                planned image feature is aimed at; until then, automated visual
                testing frameworks remain the right tool for full screenshot
                comparison.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Checking Embedded Image Data</h3>
              <p className="text-muted-foreground">
                Images are sometimes embedded directly in HTML or CSS as base64
                data URIs. If you need to confirm whether an embedded asset changed
                between two files, paste both into Text Diff mode and the differing
                data string is flagged immediately.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tips and Best Practices</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Diff SVG as Text for Precision</h3>
              <p className="text-muted-foreground">
                When the images you care about are SVG, comparing the markup is
                often better than comparing pixels. Text Diff mode pinpoints the
                exact attribute or path that changed, which is invaluable for
                debugging a rendering difference.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Pretty-Print Before Diffing</h3>
              <p className="text-muted-foreground">
                If your SVG or embedded markup is on one long line, format it so each
                element sits on its own line before pasting. That turns a single
                unreadable change into a clear, line-by-line comparison.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">
                Use a Dedicated Tool for Raster Images Today
              </h3>
              <p className="text-muted-foreground">
                For PNG, JPG, or screenshot comparison, a visual diff tool or a
                browser-based overlay is the right choice until Diff Shuttle&apos;s
                image feature lands. We would rather point you to what works than
                pretend a feature exists.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Bookmark This Page</h3>
              <p className="text-muted-foreground">
                The fastest way to know when visual image diff launches is to
                bookmark this page and check back. It will be updated in place with
                upload-and-compare instructions the moment the feature is live.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Lean on the Tools That Exist</h3>
              <p className="text-muted-foreground">
                For everything text-based — code, JSON, CSV, configs, and markup —
                Diff Shuttle is ready now. Reach for the home page tool whenever your
                comparison can be expressed as text.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Compared to Alternatives</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              For full visual comparison of raster images today, dedicated tools
              such as visual regression frameworks and browser-based image overlay
              comparers are the right fit, and we genuinely recommend them while our
              own feature is in development. We are not going to claim Diff Shuttle
              does something it does not yet do.
            </p>
            <p className="text-muted-foreground mb-4">
              Where Diff Shuttle already wins is anything text-based. If your images
              are SVG, or your real question is which line of markup or which
              embedded data string changed, the existing Text Diff mode gives you a
              precise, private, line-by-line answer that a pixel comparison cannot.
              That covers a surprising share of real-world image-related debugging.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">
                Can Diff Shuttle compare images right now?
              </h3>
              <p className="text-muted-foreground">
                Not yet. A visual image comparison feature is on our roadmap. Today,
                Diff Shuttle compares text and code, including image-related source
                such as SVG markup or base64 strings, which you can diff line by
                line.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What is image diffing?</h3>
              <p className="text-muted-foreground">
                Image diffing means comparing two images to find where they differ
                visually. It is commonly used for UI regression testing, design
                reviews, and confirming whether a screenshot changed between two
                versions of a site or app.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I compare SVG files today?</h3>
              <p className="text-muted-foreground">
                Yes, as text. SVG files are XML, so you can paste two SVG documents
                into the home page and use Text Diff mode to see exactly which paths,
                shapes, or attributes changed in the markup.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Will image diff be free and private like the text tools?
              </h3>
              <p className="text-muted-foreground">
                That is the goal. Diff Shuttle runs every comparison locally in your
                browser with nothing uploaded, and the planned image feature is
                intended to follow the same free, private, no-account approach.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                What can I use Diff Shuttle for in the meantime?
              </h3>
              <p className="text-muted-foreground">
                You can compare text, source code, JSON, and CSV right now. These
                cover most everyday comparison needs, and they all run privately in
                your browser with a free text export of the result.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                How will I know when image diff launches?
              </h3>
              <p className="text-muted-foreground">
                Keep this page bookmarked and revisit Diff Shuttle. When the
                dedicated visual image comparison feature ships, this page will be
                updated with full instructions for uploading and comparing images.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center p-8 bg-muted rounded-lg">
          <h2 className="text-xl font-bold mb-2">
            Need to Compare Something Today?
          </h2>
          <p className="text-muted-foreground mb-4">
            Our text, code, JSON, and CSV diff tools are free, instant, and 100%
            private. No registration required.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Open the Diff Tool
          </Link>
        </div>
      </div>
    </>
  );
}
