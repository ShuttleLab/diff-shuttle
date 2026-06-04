"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Minus, RefreshCw, FileText, Percent } from "lucide-react";

interface DiffStatsProps {
  additions: number;
  deletions: number;
  changes: number;
  unchanged: number;
  totalOld: number;
  totalNew: number;
  diffPercent: number;
}

export function DiffStats({
  additions,
  deletions,
  changes,
  unchanged,
  diffPercent,
}: DiffStatsProps) {
  const t = useTranslations("diff");

  const stats = [
    {
      label: t("additions"),
      value: additions,
      icon: Plus,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      label: t("deletions"),
      value: deletions,
      icon: Minus,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950",
      borderColor: "border-red-200 dark:border-red-800",
    },
    {
      label: t("changes"),
      value: changes,
      icon: RefreshCw,
      color: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-950",
      borderColor: "border-yellow-200 dark:border-yellow-800",
    },
    {
      label: t("unchanged"),
      value: unchanged,
      icon: FileText,
      color: "text-gray-600 dark:text-gray-400",
      bgColor: "bg-gray-50 dark:bg-gray-950",
      borderColor: "border-gray-200 dark:border-gray-800",
    },
    {
      label: t("diffPercent"),
      value: `${diffPercent}%`,
      icon: Percent,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {stats.map((stat) => (
        <Card key={stat.label} className={`${stat.bgColor} ${stat.borderColor}`}>
          <CardContent className="p-3">
            <div className="flex items-center gap-2 mb-1">
              <stat.icon className={`size-4 ${stat.color}`} />
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
