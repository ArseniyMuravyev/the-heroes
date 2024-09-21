"use client";

import { FC, ChangeEvent } from "react";
import { useRouter, usePathname } from "next/navigation";

export const LanguageSwitcher: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) return;
    if (e.target.value === "ru") {
      router.push("/ru");
    } else {
      router.push("/en");
    }
    router.refresh();
  };

  const isEnglish = pathname.startsWith("/en");

  return (
    <select
      onChange={handleChange}
      className="bg-transparent focus:outline-none text-2xl mt-1 border-[1px] border-zinc-500 px-2 cursor-pointer rounded-lg"
    >
      <option value={isEnglish ? "en" : "ru"}>{isEnglish ? "🇬🇧" : "🇷🇺"}</option>
      <option value={isEnglish ? "ru" : "en"}>{isEnglish ? "🇷🇺" : "🇬🇧"}</option>
    </select>
  );
};
