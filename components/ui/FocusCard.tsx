"use client";

import { useState } from "react";
import { HeroCard } from "@/types";
import { Card } from "./Card";
import { useTranslations } from "next-intl";
import { Search } from "./Search";

export function FocusCards({ cards }: { cards: HeroCard[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const t = useTranslations();

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.titleRu.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col justify-center items-center gap-10 md:gap-20 mx-auto w-full">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => (
          <div
            key={card.title}
            className="flex w-full items-center justify-center flex-col xl:flex-row gap-6 md:gap-12 xl:items-start"
          >
            <Card
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
            <p className="text-black max-w-2xl text-xl md:text-2xl">
              {t(`${card.title}.preview`)}
            </p>
          </div>
        ))
      ) : (
        <p>{t("Common.search_not_found")}</p>
      )}
    </div>
  );
}
