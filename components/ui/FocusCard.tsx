"use client";

import Image from "next/image";
import { useState, memo, Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { formatForLink } from "@/lib/utils";
import { HeroCard } from "@/types";

export const Card = memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: HeroCard;
    index: number;
    hovered: number | null;
    setHovered: Dispatch<SetStateAction<number | null>>;
  }) => (
    <Link
      href={formatForLink(card.title)}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-96 w-full md:h-[520px] transition-all duration-300 ease-out w-96",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </Link>
  ),
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: HeroCard[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center items-center gap-10 md:gap-20 w-full mx-auto w-full">
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
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
}
