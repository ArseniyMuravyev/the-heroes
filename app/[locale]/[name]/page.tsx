"use client";

import { useParams } from "next/navigation";
import { formatFromLink } from "@/lib/utils";
import { heroCards } from "@/data";
import Image from "next/image";

export default function Page() {
  const { name } = useParams<{ name: string }>();
  const title = formatFromLink(name);
  const card = heroCards.filter((item) => item.title == title)[0];

  return (
    <div className="flex flex-col items-center w-full md:max-w-1/2">
      <h1 className="text-3xl md:text-5xl font-bold text-center">{title}</h1>
      <div className="flex justify-center flex-col items-center">
        <div className="my-5 md:my-10">
          <Image src={card.src} alt={card.title} width={512} height={256} />
        </div>
        <p className="text-lg">{card.text}</p>
      </div>
    </div>
  );
}
