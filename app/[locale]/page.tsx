import { getTranslations, setRequestLocale } from "next-intl/server";
import { HomeContent } from "@/components/home-content";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical:
        locale === "en"
          ? "https://diff.shuttlelab.org/"
          : `https://diff.shuttlelab.org/${locale}`,
      languages: {
        en: "https://diff.shuttlelab.org/",
        zh: "https://diff.shuttlelab.org/zh",
        "x-default": "https://diff.shuttlelab.org/",
      },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}
