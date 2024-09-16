"use client";

import { FC } from "react";
import { useParams } from "next/navigation";
import { formatFromLink } from "@/lib/utils";
import { heroCards } from "@/data";
import { Slider } from "@/components/common/Slider";
import { InterestingFacts } from "./InterestingFacts";
import { BookList } from "./BookList";
import { Biography } from "./Biography";
import { Heading } from "../common/Heading";

export const HeroInformation: FC = () => {
  const { name } = useParams<{ name: string }>();
  const title = formatFromLink(name);
  const card = heroCards.filter((item) => item.title == title)[0];

  return (
    <div className="flex justify-center flex-col items-center w-full">
      <Heading type="h1">{`${card.title}.name`}</Heading>
      <Slider images={card.images} />
      <Biography card={card} />
      <InterestingFacts card={card} />
      <BookList card={card} />
    </div>
  );
};
