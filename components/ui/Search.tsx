import { FC } from 'react'
import { RiSearchLine } from '@remixicon/react'

type Props = {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export const Search: FC<Props> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative flex w-full items-center justify-center md:w-1/2">
      <RiSearchLine className="absolute right-3 top-1/2 -translate-y-1/2 transform text-zinc-900" />

      <input
        type="text"
        placeholder="Search for a hero..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="border-1 w-full rounded-xl border border-zinc-900 bg-transparent p-2 pr-10 focus:outline-none dark:border-zinc-300"
      />
    </div>
  )
}
