'use client'

import { FC, ChangeEvent } from 'react'
import { useRouter, usePathname } from '@/i18n/routing'

export const LanguageSwitcher: FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    const segments = pathname.split('/')

    if (segments[1] === 'ru' || segments[1] === 'en') {
      segments.splice(1, 1) // Удаляем текущий префикс языка
    }

    segments.splice(1, 0, newLocale)

    const newPathname = segments.join('/')

    router.replace(newPathname)
  }

  const isEnglish = pathname.startsWith('/en')

  return (
    <select
      onChange={handleChange}
      className="mt-1 cursor-pointer rounded-lg border-[1px] border-zinc-500 bg-transparent px-2 text-2xl focus:outline-none"
    >
      <option value={isEnglish ? 'en' : 'ru'}>{isEnglish ? '🇬🇧' : '🇷🇺'}</option>
      <option value={isEnglish ? 'ru' : 'en'}>{isEnglish ? '🇷🇺' : '🇬🇧'}</option>
    </select>
  )
}
