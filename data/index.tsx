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
    biography: ["para1", "para2", "para3", "para4", "para5"],
    books: [""],
    facts: [
      "fact1",
      "fact2",
      "fact3",
      "fact4",
      "fact5",
      "fact6",
      "fact7",
      "fact8",
      "fact9",
    ],
  },
  {
    title: "Alexander The Great",
    src: "/images/alexander-the-great.jpg",
    images: [""],
    biography: ["para1", "para2", "para3", "para4"],
    books: [""],
    facts: [""],
  },
  {
    title: "Winston Churchill",
    src: "/images/winston-churchill.jpg",
    images: [""],
    biography: ["para1", "para2", "para3", "para4"],
    books: [""],
    facts: [""],
  },
  {
    title: "Elon Musk",
    src: "/images/elon-musk.jpg",
    images: [""],
    biography: ["para1", "para2", "para3", "para4"],
    books: [""],
    facts: [""],
  },
  {
    title: "Steve Jobs",
    src: "/images/steve-jobs.jpeg",
    images: [""],
    biography: ["para1", "para2", "para3", "para4"],
    books: [""],
    facts: [""],
  },
  {
    title: "Albert Einstein",
    src: "/images/albert-einstein.jpeg",
    images: [""],
    biography: ["para1", "para2", "para3", "para4"],
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
