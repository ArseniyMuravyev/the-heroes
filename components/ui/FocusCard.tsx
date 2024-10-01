'use client'

import { useState } from 'react'
import { HeroCard } from '@/lib/types'
import { Card } from './Card'
import { useTranslations } from 'next-intl'
import { Search } from './Search'
import { usePathname } from 'next/navigation'
import { formatForLink } from '@/lib/utils'
import Link from 'next/link'
import { RiArrowRightLine } from '@remixicon/react'

export function FocusCards({ cards }: { cards: HeroCard[] }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname()
  const t = useTranslations()

  const filteredCards = cards.filter(
    card =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.titleRu.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-10 md:gap-20">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => (
          <div
            key={card.title}
            className="flex w-full flex-col items-center justify-center gap-6 md:gap-12 xl:flex-row xl:items-start"
          >
            <Card card={card} index={index} hovered={hovered} setHovered={setHovered} />
            <p className="max-w-2xl text-xl md:text-2xl">
              <span>{t(`${card.title}.preview`)}</span>
              <Link
                href={`${pathname}/${formatForLink(card.title)}`}
                className="ml-1 inline-flex items-center gap-1 font-bold text-orange-500"
              >
                {t('Common.more')}
                <RiArrowRightLine size={16} />
              </Link>
            </p>
          </div>
        ))
      ) : (
        <p>{t('Common.search_not_found')}</p>
      )}
    </div>
  )
}
