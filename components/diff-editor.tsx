"use client";

import { useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeftRight, Trash2, Upload } from "lucide-react";
import { SUPPORTED_EXTENSIONS, MAX_FILE_SIZE } from "@/lib/constants";

interface DiffEditorProps {
  original: string;
  modified: string;
  onOriginalChange: (value: string) => void;
  onModifiedChange: (value: string) => void;
  onSwap: () => void;
  onClear: () => void;
  onFileLoad: (content: string, side: "original" | "modified") => void;
}

export function DiffEditor({
  original,
  modified,
  onOriginalChange,
  onModifiedChange,
  onSwap,
  onClear,
  onFileLoad,
}: DiffEditorProps) {
  const t = useTranslations("diff");
  const originalInputRef = useRef<HTMLInputElement>(null);
  const modifiedInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, side: "original" | "modified") => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (file.size > MAX_FILE_SIZE) {
        alert("File is too large. Maximum size is 10MB.");
        return;
      }

      const ext = file.name.split(".").pop()?.toLowerCase();
      if (ext && !SUPPORTED_EXTENSIONS.includes(ext)) {
        alert("Unsupported file format.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        onFileLoad(content, side);
      };
      reader.readAsText(file);

      e.target.value = "";
    },
    [onFileLoad]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent, side: "original" | "modified") => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (!file) return;

      if (file.size > MAX_FILE_SIZE) {
        alert("File is too large. Maximum size is 10MB.");
        return;
      }

      const ext = file.name.split(".").pop()?.toLowerCase();
      if (ext && !SUPPORTED_EXTENSIONS.includes(ext)) {
        alert("Unsupported file format.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        onFileLoad(content, side);
      };
      reader.readAsText(file);
    },
    [onFileLoad]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onSwap}>
            <ArrowLeftRight className="size-4 mr-1.5" />
            {t("swap")}
          </Button>
          <Button variant="outline" size="sm" onClick={onClear}>
            <Trash2 className="size-4 mr-1.5" />
            {t("clear")}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">{t("original")}</label>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => originalInputRef.current?.click()}
            >
              <Upload className="size-4 mr-1.5" />
              {t("selectFile")}
            </Button>
            <input
              ref={originalInputRef}
              type="file"
              className="hidden"
              accept={SUPPORTED_EXTENSIONS.map((ext) => `.${ext}`).join(",")}
              onChange={(e) => handleFileSelect(e, "original")}
            />
          </div>
          <div
            onDrop={(e) => handleDrop(e, "original")}
            onDragOver={handleDragOver}
          >
            <Textarea
              value={original}
              onChange={(e) => onOriginalChange(e.target.value)}
              placeholder={t("pasteText")}
              className="min-h-[300px] font-mono text-sm resize-y"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">{t("modified")}</label>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => modifiedInputRef.current?.click()}
            >
              <Upload className="size-4 mr-1.5" />
              {t("selectFile")}
            </Button>
            <input
              ref={modifiedInputRef}
              type="file"
              className="hidden"
              accept={SUPPORTED_EXTENSIONS.map((ext) => `.${ext}`).join(",")}
              onChange={(e) => handleFileSelect(e, "modified")}
            />
          </div>
          <div
            onDrop={(e) => handleDrop(e, "modified")}
            onDragOver={handleDragOver}
          >
            <Textarea
              value={modified}
              onChange={(e) => onModifiedChange(e.target.value)}
              placeholder={t("pasteText")}
              className="min-h-[300px] font-mono text-sm resize-y"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
