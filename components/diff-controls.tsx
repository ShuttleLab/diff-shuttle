"use client";

import { useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { DIFF_MODES, VIEW_MODES } from "@/lib/constants";
import type { DiffMode } from "@/lib/diff-engine";

interface DiffControlsProps {
  mode: DiffMode;
  viewMode: "side-by-side" | "unified";
  ignoreWhitespace: boolean;
  ignoreCase: boolean;
  onModeChange: (mode: DiffMode) => void;
  onViewModeChange: (mode: "side-by-side" | "unified") => void;
  onIgnoreWhitespaceChange: (value: boolean) => void;
  onIgnoreCaseChange: (value: boolean) => void;
  onExport: () => void;
}

export function DiffControls({
  mode,
  viewMode,
  ignoreWhitespace,
  ignoreCase,
  onModeChange,
  onViewModeChange,
  onIgnoreWhitespaceChange,
  onIgnoreCaseChange,
  onExport,
}: DiffControlsProps) {
  const t = useTranslations("diff");

  const modeLabelKey = (value: string) => `${value}Diff` as const;
  const viewLabelKey = (value: string) =>
    value === "side-by-side" ? "sideBySide" : "unified";

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
      <div className="space-y-2">
        <Label className="text-sm font-medium">{t("mode")}</Label>
        <Select value={mode} onValueChange={(v) => onModeChange(v as DiffMode)}>
          <SelectTrigger className="h-10 w-full sm:w-[160px]">
            <SelectValue>
              {(value) =>
                value ? t(modeLabelKey(value as string)) : null
              }
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {DIFF_MODES.map((m) => (
              <SelectItem key={m.value} value={m.value}>
                {t(modeLabelKey(m.value))}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">{t("view")}</Label>
        <Select
          value={viewMode}
          onValueChange={(v) => onViewModeChange(v as "side-by-side" | "unified")}
        >
          <SelectTrigger className="h-10 w-full sm:w-[160px]">
            <SelectValue>
              {(value) =>
                value ? t(viewLabelKey(value as string)) : null
              }
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {VIEW_MODES.map((m) => (
              <SelectItem key={m.value} value={m.value}>
                {t(viewLabelKey(m.value))}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">{t("options")}</Label>
        <div className="flex min-h-10 flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex items-center gap-2">
            <Switch
              id="ignoreWhitespace"
              checked={ignoreWhitespace}
              onCheckedChange={onIgnoreWhitespaceChange}
            />
            <Label htmlFor="ignoreWhitespace" className="text-sm cursor-pointer">
              {t("ignoreWhitespace")}
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id="ignoreCase"
              checked={ignoreCase}
              onCheckedChange={onIgnoreCaseChange}
            />
            <Label htmlFor="ignoreCase" className="text-sm cursor-pointer">
              {t("ignoreCase")}
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label className="hidden text-sm font-medium sm:block">&nbsp;</Label>
        <Button
          variant="outline"
          onClick={onExport}
          className="h-10 w-full sm:w-auto"
        >
          <Download className="size-4" />
          {t("exportText")}
        </Button>
      </div>
    </div>
  );
}
