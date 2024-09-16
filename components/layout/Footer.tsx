import { footerLinks } from "@/data";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="p-4 md:p-8 bg-black flex items-center justify-between w-full text-white">
      <ul className="w-full flex items-center justify-center gap-4">
        {footerLinks.map(({ link, icon }) => (
          <a
            key={link}
            href={link}
            className="rounded-lg border border-black border-1 p-1"
          >
            {icon}
          </a>
        ))}
      </ul>
    </footer>
  );
};
