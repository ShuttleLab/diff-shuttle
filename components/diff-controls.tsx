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

  return (
    <div className="flex flex-wrap items-end gap-4">
      <div className="space-y-2">
        <Label className="text-sm font-medium">{t("mode")}</Label>
        <Select value={mode} onValueChange={(v) => onModeChange(v as DiffMode)}>
          <SelectTrigger className="w-[160px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {DIFF_MODES.map((m) => (
              <SelectItem key={m.value} value={m.value}>
                {t(`${m.value}Diff`)}
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
          <SelectTrigger className="w-[160px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {VIEW_MODES.map((m) => (
              <SelectItem key={m.value} value={m.value}>
                {t(m.value === "side-by-side" ? "sideBySide" : "unified")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium">{t("options")}</Label>
        <div className="flex items-center gap-4">
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
        <Label className="text-sm font-medium">&nbsp;</Label>
        <Button variant="outline" size="sm" onClick={onExport}>
          <Download className="size-4 mr-1.5" />
          {t("exportText")}
        </Button>
      </div>
    </div>
  );
}
