import { HeroCard, IconLink } from "@/types";
import { RiGithubFill, RiTelegramLine } from "@remixicon/react";

export const heroCards: HeroCard[] = [
  {
    title: "Alexander The Great",
    src: "/images/alexander-the-great.jpg",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sapien phasellus vitae, erat fermentum sociosqu malesuada. Magnis nam curabitur justo; morbi quisque ad justo. Sagittis vulputate pharetra lacinia convallis sit montes. Justo per ultrices nostra cras ut mauris mollis inceptos. Habitasse faucibus potenti velit turpis fusce lobortis aptent. Vitae interdum rhoncus consectetur senectus ridiculus. Bibendum vehicula venenatis massa curabitur pulvinar a.",
  },
  {
    title: "Winston Churchill",
    src: "/images/winston-churchill.webp",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sapien phasellus vitae, erat fermentum sociosqu malesuada. Magnis nam curabitur justo; morbi quisque ad justo. Sagittis vulputate pharetra lacinia convallis sit montes. Justo per ultrices nostra cras ut mauris mollis inceptos. Habitasse faucibus potenti velit turpis fusce lobortis aptent. Vitae interdum rhoncus consectetur senectus ridiculus. Bibendum vehicula venenatis massa curabitur pulvinar a.",
  },
  {
    title: "Leonardo Da Vinci",
    src: "/images/leonardo-da-vinci.webp",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sapien phasellus vitae, erat fermentum sociosqu malesuada. Magnis nam curabitur justo; morbi quisque ad justo. Sagittis vulputate pharetra lacinia convallis sit montes. Justo per ultrices nostra cras ut mauris mollis inceptos. Habitasse faucibus potenti velit turpis fusce lobortis aptent. Vitae interdum rhoncus consectetur senectus ridiculus. Bibendum vehicula venenatis massa curabitur pulvinar a.",
  },
  {
    title: "Elon Musk",
    src: "/images/elon-musk.jpg",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sapien phasellus vitae, erat fermentum sociosqu malesuada. Magnis nam curabitur justo; morbi quisque ad justo. Sagittis vulputate pharetra lacinia convallis sit montes. Justo per ultrices nostra cras ut mauris mollis inceptos. Habitasse faucibus potenti velit turpis fusce lobortis aptent. Vitae interdum rhoncus consectetur senectus ridiculus. Bibendum vehicula venenatis massa curabitur pulvinar a.",
  },
  {
    title: "Steve Jobs",
    src: "/images/steve-jobs.jpeg",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sapien phasellus vitae, erat fermentum sociosqu malesuada. Magnis nam curabitur justo; morbi quisque ad justo. Sagittis vulputate pharetra lacinia convallis sit montes. Justo per ultrices nostra cras ut mauris mollis inceptos. Habitasse faucibus potenti velit turpis fusce lobortis aptent. Vitae interdum rhoncus consectetur senectus ridiculus. Bibendum vehicula venenatis massa curabitur pulvinar a.",
  },
  {
    title: "Albert Einstein",
    src: "/images/albert-einstein.jpeg",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sapien phasellus vitae, erat fermentum sociosqu malesuada. Magnis nam curabitur justo; morbi quisque ad justo. Sagittis vulputate pharetra lacinia convallis sit montes. Justo per ultrices nostra cras ut mauris mollis inceptos. Habitasse faucibus potenti velit turpis fusce lobortis aptent. Vitae interdum rhoncus consectetur senectus ridiculus. Bibendum vehicula venenatis massa curabitur pulvinar a.",
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
