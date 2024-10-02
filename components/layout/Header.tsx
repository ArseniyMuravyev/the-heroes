import { FC } from 'react'
import { Logo } from '../common/Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggler } from './ThemeToggler'

export const Header: FC = () => {
  return (
    <header className="sticky left-0 top-0 z-10 flex w-full items-center justify-between p-4 backdrop-blur-md md:p-8">
      <Logo />
      <div className="flex items-center gap-3">
        <ThemeToggler />
        <LanguageSwitcher />
        {/*
        <a
          className="rounded-lg p-1"
          href="https://github.com/ArseniyMuravyev/the-heroes"
          target="_blank"
        >
          <RiGithubFill size={28} />
        </a>
				*/}
      </div>
    </header>
  )
}
