"use client";

import { useParams } from "next/navigation";
import { formatFromLink } from "@/lib/utils";
import { heroCards } from "@/data";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const { name } = useParams<{ name: string }>();
  const title = formatFromLink(name);
  const card = heroCards.filter((item) => item.title == title)[0];
  const t = useTranslations();

  return (
    <div className="flex flex-col items-center w-full md:max-w-1/2">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        {t(`${card.title}.name`)}
      </h1>
      <div className="flex justify-center flex-col items-center">
        <div className="my-5 md:my-10">
          <Image src={card.src} alt={card.title} width={512} height={256} />
        </div>
        <h3 className="text-xl font-bold text-center">
          {t("Common.biography")}
        </h3>
        <p className="text-lg">{t(`${card.title}.biography`)}</p>
        <h3 className="text-xl font-bold text-center">{t("Common.facts")}</h3>
        <p className="text-lg">{t(`${card.title}.facts`)}</p>
        <h3 className="text-xl font-bold text-center">{t("Common.books")}</h3>
        <p className="text-lg">{t(`${card.title}.books`)}</p>
      </div>
    </div>
  );
}
