'use client'

import { FC, useEffect, useState } from 'react'
import clsx from 'clsx'
import { RiMoonLine, RiSunLine } from '@remixicon/react'

const themes = ['light', 'dark']

export const ThemeToggler: FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })
  const [isMounted, setIsMounted] = useState(false)

  const toggleTheme = () => {
    const t = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div className="inline-flex items-center rounded-3xl bg-orange-300 p-[1px] transition-colors duration-300 dark:bg-zinc-600">
      {themes.map(t => {
        const checked = t === theme
        return (
          <button
            key={t}
            className={clsx('cursor-pointer rounded-3xl p-2', {
              ['bg-white text-black']: checked
            })}
            onClick={toggleTheme}
          >
            {t === 'light' ? <RiSunLine size={16} /> : <RiMoonLine size={16} />}
          </button>
        )
      })}
    </div>
  ) : (
    <div />
  )
}
