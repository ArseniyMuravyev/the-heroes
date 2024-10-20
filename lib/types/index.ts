import { ReactElement } from 'react'

export type IconLink = {
  link: string
  icon: ReactElement
}

export type HeroCard = {
  title: string
  titleRu: string
  src: string
  biography: string[]
  images: string[]
  facts: string[]
  books: string[]
}
