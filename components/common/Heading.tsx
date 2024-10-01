import { FC } from 'react'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'

type Props = {
  children: string
  className?: string
  type: 'h1' | 'h2' | 'h3'
}

export const Heading: FC<Props> = ({ type, children, className }) => {
  const heading = 'text-center font-bold w-full'
  const t = useTranslations()

  if (type === 'h1') {
    return <h1 className={clsx(heading, className, 'text-3xl md:text-4xl')}>{t(children)}</h1>
  }
  if (type === 'h2') {
    return <h2 className={clsx(heading, className, 'text-2xl md:text-3xl')}>{t(children)}</h2>
  } else {
    return <h3 className={clsx(heading, className, 'text-xl md:text-2xl')}>{t(children)}</h3>
  }
}
