"use client";

import { useState } from "react";
import { HeroCard } from "@/types";
import { Card } from "./Card";
import { useTranslations } from "next-intl";

export function FocusCards({ cards }: { cards: HeroCard[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const t = useTranslations();

  return (
    <div className="flex flex-col justify-center items-center gap-10 md:gap-20 mx-auto w-full">
      {cards.map((card, index) => (
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
      ))}
    </div>
  );
}
