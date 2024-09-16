import { HeroCard } from "@/types";
import { FC } from "react";
import { Heading } from "../common/Heading";
import { useTranslations } from "next-intl";

type Props = {
  card: HeroCard;
};

export const BookList: FC<Props> = ({ card }) => {
  const t = useTranslations();
  return (
    <section className="w-full md:w-3/4 xl:w-1/2">
      <Heading type="h3">Common.books</Heading>
      <ul className="list-disc">
        {card.books.map((book) => (
          <li key={book}>{t(book)}</li>
        ))}
      </ul>
    </section>
  );
};