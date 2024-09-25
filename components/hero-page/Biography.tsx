import { HeroCard } from "@/lib/types";
import { Paragraph } from "../common/Paragraph";
import { FC } from "react";
import { Heading } from "../common/Heading";

type Props = {
  card: HeroCard;
};

export const Biography: FC<Props> = ({ card }) => {
  return (
    <section className="w-full md:w-3/4 xl:w-1/2">
      <Heading type="h3">Common.biography</Heading>
      {card.biography.map((fact) => (
        <Paragraph key={fact}>{`${card.title}.biography.${fact}`}</Paragraph>
      ))}
    </section>
  );
};
