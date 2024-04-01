import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: any };
}) {
  const t = await getTranslations("Metadata");

  return {
    title: t("title"),
    description: t("description"),
    content: t("content"),
  };
}
