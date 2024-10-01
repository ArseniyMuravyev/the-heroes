import Image from 'next/image'
import { memo, Dispatch, SetStateAction } from 'react'
import { cn } from '@/lib/utils'
import { formatForLink } from '@/lib/utils'
import { HeroCard } from '@/lib/types'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const Card = memo(
  ({
    card,
    index,
    hovered,
    setHovered
  }: {
    card: HeroCard
    index: number
    hovered: number | null
    setHovered: Dispatch<SetStateAction<number | null>>
  }) => {
    const pathname = usePathname()
    const t = useTranslations()

    return (
      <Link
        href={`${pathname}/${formatForLink(card.title)}`}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          'relative h-[520px] w-96 overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ease-out dark:bg-neutral-900',
          hovered !== null && hovered !== index && 'scale-[0.98] blur-sm'
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          priority
          className="absolute inset-0 object-cover"
        />
        <div
          className={cn(
            'absolute inset-0 flex items-end bg-black/50 px-4 py-8 transition-opacity duration-300',
            hovered === index ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-xl font-medium text-transparent md:text-2xl">
            {t(`${card.title}.name`)}
          </div>
        </div>
      </Link>
    )
  }
)

Card.displayName = 'Card'
