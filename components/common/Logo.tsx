import { FC } from 'react'
import Link from 'next/link'
import { LogoIcon } from '../ui/LogoIcon'

export const Logo: FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-bold md:text-4xl">
      <span>The Heroes</span>
      <LogoIcon />
    </Link>
  )
}
