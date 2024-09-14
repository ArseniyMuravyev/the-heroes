import { HeroCard, IconLink } from "@/types";
import { RiGithubFill, RiTelegramLine } from "@remixicon/react";

export const heroCards: HeroCard[] = [
  {
    title: "Leonardo Da Vinci",
    src: "/images/leonardo-da-vinci.webp",
    photos: [""],
  },
  {
    title: "Alexander The Great",
    src: "/images/alexander-the-great.jpg",
    photos: [""],
  },
  {
    title: "Winston Churchill",
    src: "/images/winston-churchill.webp",
    photos: [""],
  },
  {
    title: "Elon Musk",
    src: "/images/elon-musk.jpg",
    photos: [""],
  },
  {
    title: "Steve Jobs",
    src: "/images/steve-jobs.jpeg",
    photos: [""],
  },
  {
    title: "Albert Einstein",
    src: "/images/albert-einstein.jpeg",
    photos: [""],
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
