import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

export const Logo: FC = () => {
  return (
    <Link href="/" className="text-4xl font-bold flex gap-2 items-center">
      <span>The Heroes</span>
      <div className="relative w-7 h-7">
        <Image src="/icons/logo.svg" alt="logo image" fill />
      </div>
    </Link>
  );
};
