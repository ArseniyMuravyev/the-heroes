import { HeroCard } from "@/types";
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
      <Paragraph>{`${card.title}.biography.para1`}</Paragraph>
      <Paragraph>{`${card.title}.biography.para2`}</Paragraph>
    </section>
  );
};
