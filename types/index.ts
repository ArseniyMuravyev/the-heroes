import { ReactElement } from "react";

export type IconLink = {
  link: string;
  icon: ReactElement;
};

export type HeroCard = {
  title: string;
  src: string;
  images: string[];
  facts: string[];
  books: string[];
};
