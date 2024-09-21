import Image from "next/image";
import { memo, Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { formatForLink } from "@/lib/utils";
import { HeroCard } from "@/types";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Card = memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: HeroCard;
    index: number;
    hovered: number | null;
    setHovered: Dispatch<SetStateAction<number | null>>;
  }) => {
    const pathname = usePathname();
    const t = useTranslations();

    return (
      <Link
        href={`${pathname}/${formatForLink(card.title)}`}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-[520px] transition-all duration-300 ease-out w-96",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          priority
          className="object-cover absolute inset-0"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {t(`${card.title}.name`)}
          </div>
        </div>
      </Link>
    );
  },
);

Card.displayName = "Card";
