import { FC } from "react";
import { Logo } from "../common/Logo";
import { Search } from "./Search";

export const Header: FC = () => {
  return (
    <header className="sticky top-0 left-0 p-4 md:p-8 bg-yellow-300 flex items-center justify-between w-full text-black">
      <Logo />
      <Search />
    </header>
  );
};
