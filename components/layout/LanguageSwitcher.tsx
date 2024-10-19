'use client'

import { FC, ChangeEvent } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export const LanguageSwitcher: FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const pathnameWithoutLocale = pathname.split('/')[2]
    if (!e.target.value) return
    if (e.target.value === 'ru') {
      router.push(`/ru/${pathnameWithoutLocale}`)
    } else {
      router.push(`/en/${pathnameWithoutLocale}`)
    }
    router.refresh()
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
