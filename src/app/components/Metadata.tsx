import { getTranslator } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslator(locale, "Metadata");

  return {
    title: t("title"),
    description: t("description"),
    content: t("content"),
  };
}
