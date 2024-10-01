import { HeroCard } from '@/lib/types'
import { FC } from 'react'
import { Heading } from '../common/Heading'
import { useTranslations } from 'next-intl'

type Props = {
  card: HeroCard
}

export const InterestingFacts: FC<Props> = ({ card }) => {
  const t = useTranslations()
  return (
    <section className="w-full md:w-3/4 xl:w-1/2">
      <Heading type="h3">Common.facts</Heading>
      <ul className="ml-4 list-disc">
        {card.facts.map(fact => (
          <li key={fact} className="my-2">
            {t(`${card.title}.facts.${fact}`)}
          </li>
        ))}
      </ul>
    </section>
  )
}
