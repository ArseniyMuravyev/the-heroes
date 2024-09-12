import { FC } from "react";
import { Logo } from "../common/Logo";
import { Search } from "./Search";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header: FC = () => {
  return (
    <header className="sticky top-0 left-0 p-4 md:p-8 bg-black flex items-center justify-between w-full z-10">
      <Logo />
      <div className="flex gap-3 items-center">
        <LanguageSwitcher />
        <Search />
      </div>
    </header>
  );
};
