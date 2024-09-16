import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FC, useCallback, useEffect, useState } from "react";
import { RiArrowRightLine, RiArrowLeftLine } from "@remixicon/react";
import Image from "next/image";
import styles from "@/styles/carousel.module.css";
import clsx from "clsx";

type Props = {
  images: string[];
};

export const Slider: FC<Props> = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 7500 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }
  }, [emblaApi, onSelect]);

  return (
    <div className={clsx(styles.embla, "my-5 md:my-10")}>
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
        className="absolute left-0 top-1/2 transform h-8 rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group flex items-center justify-center"
        onClick={scrollPrev}
      >
        <RiArrowLeftLine />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-8 rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group flex items-center justify-center"
        onClick={scrollNext}
      >
        <RiArrowRightLine />
      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === selectedIndex
                ? "bg-black rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
};
