"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import type { DiffResult } from "@/lib/diff-engine";

interface DiffResultViewProps {
  result: DiffResult | null;
  viewMode: "side-by-side" | "unified";
}

export function DiffResultView({ result, viewMode }: DiffResultViewProps) {
  const t = useTranslations("diff");

  const { leftLines, rightLines, unifiedLines } = useMemo(() => {
    if (!result) return { leftLines: [], rightLines: [], unifiedLines: [] };

    if (viewMode === "unified") {
      return {
        leftLines: [],
        rightLines: [],
        unifiedLines: result.lines,
      };
    }

    const left: typeof result.lines = [];
    const right: typeof result.lines = [];

    for (const line of result.lines) {
      switch (line.type) {
        case "removed":
          left.push(line);
          right.push({ ...line, type: "unchanged", content: "" });
          break;
        case "added":
          left.push({ ...line, type: "unchanged", content: "" });
          right.push(line);
          break;
        default:
          left.push(line);
          right.push(line);
          break;
      }
    }

    return { leftLines: left, rightLines: right, unifiedLines: [] };
  }, [result, viewMode]);

  if (!result || result.lines.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center text-muted-foreground">
          {t("noDifferences")}
        </CardContent>
      </Card>
    );
  }

  const getLineClassName = (type: string) => {
    switch (type) {
      case "added":
        return "bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100";
      case "removed":
        return "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-100";
      default:
        return "";
    }
  };

  const getLineNumberClassName = (type: string) => {
    switch (type) {
      case "added":
        return "bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-200";
      case "removed":
        return "bg-red-200 dark:bg-red-900/50 text-red-800 dark:text-red-200";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getPrefix = (type: string) => {
    switch (type) {
      case "added":
        return "+";
      case "removed":
        return "-";
      default:
        return " ";
    }
  };

  if (viewMode === "side-by-side") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border rounded-lg overflow-hidden">
        <div className="border-r">
          <div className="bg-muted px-3 py-2 text-sm font-medium border-b">
            {t("original")}
          </div>
          <ScrollArea className="h-[400px]">
            <pre className="text-sm font-mono">
              {leftLines.map((line, i) => (
                <div
                  key={i}
                  className={`flex ${getLineClassName(line.type)}`}
                >
                  <span
                    className={`w-12 px-2 py-0.5 text-right shrink-0 select-none ${getLineNumberClassName(
                      line.type
                    )}`}
                  >
                    {line.oldLineNumber || ""}
                  </span>
                  <span className="w-6 px-1 py-0.5 text-center shrink-0 select-none text-muted-foreground">
                    {getPrefix(line.type)}
                  </span>
                  <span className="flex-1 py-0.5 pr-2 whitespace-pre-wrap break-all">
                    {line.content}
                  </span>
                </div>
              ))}
            </pre>
          </ScrollArea>
        </div>

        <div>
          <div className="bg-muted px-3 py-2 text-sm font-medium border-b">
            {t("modified")}
          </div>
          <ScrollArea className="h-[400px]">
            <pre className="text-sm font-mono">
              {rightLines.map((line, i) => (
                <div
                  key={i}
                  className={`flex ${getLineClassName(line.type)}`}
                >
                  <span
                    className={`w-12 px-2 py-0.5 text-right shrink-0 select-none ${getLineNumberClassName(
                      line.type
                    )}`}
                  >
                    {line.newLineNumber || ""}
                  </span>
                  <span className="w-6 px-1 py-0.5 text-center shrink-0 select-none text-muted-foreground">
                    {getPrefix(line.type)}
                  </span>
                  <span className="flex-1 py-0.5 pr-2 whitespace-pre-wrap break-all">
                    {line.content}
                  </span>
                </div>
              ))}
            </pre>
          </ScrollArea>
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px]">
          <pre className="text-sm font-mono">
            {unifiedLines.map((line, i) => (
              <div
                key={i}
                className={`flex ${getLineClassName(line.type)}`}
              >
                <span
                  className={`w-12 px-2 py-0.5 text-right shrink-0 select-none ${getLineNumberClassName(
                    line.type
                  )}`}
                >
                  {line.oldLineNumber || ""}
                </span>
                <span
                  className={`w-12 px-2 py-0.5 text-right shrink-0 select-none ${getLineNumberClassName(
                    line.type
                  )}`}
                >
                  {line.newLineNumber || ""}
                </span>
                <span className="w-6 px-1 py-0.5 text-center shrink-0 select-none text-muted-foreground">
                  {getPrefix(line.type)}
                </span>
                <span className="flex-1 py-0.5 pr-2 whitespace-pre-wrap break-all">
                  {line.content}
                </span>
              </div>
            ))}
          </pre>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
