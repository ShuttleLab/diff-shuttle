"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  FileCode,
  Columns,
  Upload,
  UserCheck,
  Sparkles,
  GitCompare,
  ArrowRight,
  Lock,
} from "lucide-react";
import { DiffEditor } from "@/components/diff-editor";
import { DiffControls } from "@/components/diff-controls";
import { DiffResultView } from "@/components/diff-result";
import { DiffStats } from "@/components/diff-stats";
import {
  computeDiff,
  exportDiffAsText,
  type DiffMode,
  type DiffResult,
} from "@/lib/diff-engine";
import { toast } from "sonner";

export function HomeContent() {
  const t = useTranslations("home");
  const tDiff = useTranslations("diff");

  const [original, setOriginal] = useState("");
  const [modified, setModified] = useState("");
  const [mode, setMode] = useState<DiffMode>("text");
  const [viewMode, setViewMode] = useState<"side-by-side" | "unified">(
    "side-by-side"
  );
  const [ignoreWhitespace, setIgnoreWhitespace] = useState(false);
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [result, setResult] = useState<DiffResult | null>(null);

  const handleCompare = useCallback(() => {
    if (!original.trim() && !modified.trim()) {
      toast.error(tDiff("errorEmptyInput"));
      return;
    }

    const diffResult = computeDiff(original, modified, mode, {
      ignoreWhitespace,
      ignoreCase,
    });
    setResult(diffResult);
  }, [original, modified, mode, ignoreWhitespace, ignoreCase, tDiff]);

  const handleSwap = useCallback(() => {
    setOriginal(modified);
    setModified(original);
    if (result) {
      const diffResult = computeDiff(modified, original, mode, {
        ignoreWhitespace,
        ignoreCase,
      });
      setResult(diffResult);
    }
  }, [original, modified, mode, ignoreWhitespace, ignoreCase, result]);

  const handleClear = useCallback(() => {
    setOriginal("");
    setModified("");
    setResult(null);
  }, []);

  const handleFileLoad = useCallback(
    (content: string, side: "original" | "modified") => {
      if (side === "original") {
        setOriginal(content);
      } else {
        setModified(content);
      }
    },
    []
  );

  const handleExport = useCallback(() => {
    if (!result) return;
    const text = exportDiffAsText(result);
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "diff-result.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast.success(tDiff("exportSuccess"));
  }, [result, tDiff]);

  const features = [
    {
      icon: Shield,
      title: t("feature1Title"),
      desc: t("feature1Desc"),
    },
    {
      icon: FileCode,
      title: t("feature2Title"),
      desc: t("feature2Desc"),
    },
    {
      icon: Columns,
      title: t("feature3Title"),
      desc: t("feature3Desc"),
    },
    {
      icon: Upload,
      title: t("feature4Title"),
      desc: t("feature4Desc"),
    },
    {
      icon: UserCheck,
      title: t("feature5Title"),
      desc: t("feature5Desc"),
    },
    {
      icon: Sparkles,
      title: t("feature6Title"),
      desc: t("feature6Desc"),
    },
  ];

  const steps = [
    { title: t("step1Title"), desc: t("step1Desc") },
    { title: t("step2Title"), desc: t("step2Desc") },
    { title: t("step3Title"), desc: t("step3Desc") },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            {t("privacyBadge")}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {t("title")}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => document.getElementById("diff-tool")?.scrollIntoView({ behavior: "smooth" })}>
              {t("cta")}
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}>
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
      </section>

      {/* Diff Tool */}
      <section id="diff-tool" className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <DiffControls
            mode={mode}
            viewMode={viewMode}
            ignoreWhitespace={ignoreWhitespace}
            ignoreCase={ignoreCase}
            onModeChange={setMode}
            onViewModeChange={setViewMode}
            onIgnoreWhitespaceChange={setIgnoreWhitespace}
            onIgnoreCaseChange={setIgnoreCase}
            onExport={handleExport}
          />

          <DiffEditor
            original={original}
            modified={modified}
            onOriginalChange={setOriginal}
            onModifiedChange={setModified}
            onSwap={handleSwap}
            onClear={handleClear}
            onFileLoad={handleFileLoad}
          />

          <div className="flex justify-center">
            <Button size="lg" onClick={handleCompare} className="w-full sm:w-auto">
              <GitCompare className="size-4" />
              {tDiff("compare")}
            </Button>
          </div>

          {result && (
            <>
              <DiffStats
                additions={result.stats.additions}
                deletions={result.stats.deletions}
                changes={result.stats.changes}
                unchanged={result.stats.unchanged}
                totalOld={result.stats.totalOld}
                totalNew={result.stats.totalNew}
                diffPercent={result.stats.diffPercent}
              />
              <DiffResultView result={result} viewMode={viewMode} />
            </>
          )}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("featuresHeading")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                    <feature.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("howItWorks")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Diff Matters */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{t("whyDiffTitle")}</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t("whyDiffP1")}</p>
            <p>{t("whyDiffP2")}</p>
          </div>

          <h3 className="text-2xl font-bold mt-12 mb-6">
            {t("howDifferentTitle")}
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>{t("howDifferentP1")}</p>
            <p>{t("howDifferentP2")}</p>
          </div>
        </div>
      </section>

      {/* Privacy Badge */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 px-4 py-2 rounded-full">
            <Lock className="size-4" />
            <span className="font-medium">{t("privacyBadge")}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
