import { HeroCard, IconLink } from "@/types";
import { RiGithubFill, RiTelegramLine } from "@remixicon/react";

export const heroCards: HeroCard[] = [
  {
    title: "Leonardo Da Vinci",
    src: "/images/leonardo-da-vinci.webp",
    images: [
      "/images/leonardo-da-vinci.webp",
      "/images/leonardo-da-vinci-1.jpg",
      "/images/leonardo-da-vinci-2.webp",
    ],
    books: [""],
    facts: ["fact1", "fact2"],
  },
  {
    title: "Alexander The Great",
    src: "/images/alexander-the-great.jpg",
    images: [""],
    books: [""],
    facts: [""],
  },
  {
    title: "Winston Churchill",
    src: "/images/winston-churchill.jpg",
    images: [""],
    books: [""],
    facts: [""],
  },
  {
    title: "Elon Musk",
    src: "/images/elon-musk.jpg",
    images: [""],
    books: [""],
    facts: [""],
  },
  {
    title: "Steve Jobs",
    src: "/images/steve-jobs.jpeg",
    images: [""],
    books: [""],
    facts: [""],
  },
  {
    title: "Albert Einstein",
    src: "/images/albert-einstein.jpeg",
    images: [""],
    books: [""],
    facts: [""],
  },
];

export const footerLinks: IconLink[] = [
  {
    link: "https://github.com/ArseniyMuravyev",
    icon: <RiGithubFill size={28} />,
  },
  {
    link: "https://t.me/arseniyMuravyev",
    icon: <RiTelegramLine size={28} />,
  },
];
