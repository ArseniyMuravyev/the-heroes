import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FC, useCallback, useEffect, useState } from 'react'
import { RiArrowRightLine, RiArrowLeftLine } from '@remixicon/react'
import Image from 'next/image'
import styles from '@/styles/carousel.module.css'
import clsx from 'clsx'

type Props = {
  images: string[]
}

export const Slider: FC<Props> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 7500 })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', onSelect)
      onSelect()
    }
  }, [emblaApi, onSelect])

  return (
    <div className={clsx(styles.embla, 'my-5 md:my-10')}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {images.map((image, index) => (
            <div className={styles.slide} key={index}>
              <div className="relative h-full w-full">
                <Image
                  src={image}
                  alt={`Slider Image ${index + 1}`}
                  className="rounded-xl object-cover"
                  fill
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="group absolute left-0 top-1/2 mx-1 -mt-[10px] flex h-8 -translate-y-1/2 transform items-center justify-center rounded-xl bg-zinc-900 p-2 text-zinc-100 hover:bg-[#1a222f] dark:bg-orange-50 dark:text-zinc-900"
        onClick={scrollPrev}
      >
        <RiArrowLeftLine />
      </button>
      <button
        className="darl: group absolute right-0 top-1/2 mx-1 -mt-[10px] flex h-8 -translate-y-1/2 transform items-center justify-center rounded-xl bg-zinc-900 p-2 text-zinc-100 hover:bg-[#1a222f] dark:bg-orange-50 dark:text-zinc-900"
        onClick={scrollNext}
      >
        <RiArrowRightLine />
      </button>
      <div className="mt-4 flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`mx-1 h-1 w-10 ${
              index === selectedIndex
                ? 'rounded-xl bg-zinc-900 dark:bg-orange-300'
                : 'rounded-xl bg-zinc-300 dark:bg-zinc-300'
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  )
}
