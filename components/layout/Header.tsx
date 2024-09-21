import { FC } from "react";
import { Logo } from "../common/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { RiGithubFill } from "@remixicon/react";
import { ThemeToggler } from "./ThemeToggler";

export const Header: FC = () => {
  return (
    <header className="sticky top-0 left-0 p-4 md:p-8 flex items-center justify-between w-full z-10 backdrop-blur-md">
      <Logo />
      <div className="flex gap-3 items-center">
        <ThemeToggler />
        <LanguageSwitcher />
        <a
          className="rounded-lg p-1"
          href="https://github.com/ArseniyMuravyev/the-heroes"
        >
          <RiGithubFill size={28} />
        </a>
      </div>
    </header>
  );
};
