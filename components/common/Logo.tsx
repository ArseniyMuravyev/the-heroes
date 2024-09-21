import { FC } from "react";
import Link from "next/link";
import { LogoIcon } from "../ui/LogoIcon";

export const Logo: FC = () => {
  return (
    <Link
      href="/"
      className="text-3xl md:text-4xl font-bold flex gap-2 items-center"
    >
      <span>The Heroes</span>
      <LogoIcon />
    </Link>
  );
};
