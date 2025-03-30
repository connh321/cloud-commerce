'use client';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './CardCarousel.module.scss';
import CardWrapper from '../CardWrapper/CardWrapper';
import { useGlobalContext } from '@/context/Global/GlobalContext';


interface CardCarouselProps {
  cards: ReactNode[];
}

const colors: string[] = [
  '#32D573', // $spring green
  '#094A7E', // $dark-blue
  '#D4B2FF', // $purple
  '#96F6FF', // $teal
  '#FF5A5F', // $coral-red
  '#0C7C3C', // $forrest-green
  '#B16980', // $pink
  '#29171A', // $ruby
];

const CardCarousel = ({cards}: CardCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setPrimaryColor } = useGlobalContext(); 
  useEffect(() => {
    setPrimaryColor(colors[activeIndex % colors.length]);
  }, [activeIndex, setPrimaryColor]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  return (
    <div className={styles.carouselContainer}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        navigation
        slidesPerGroupAuto
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 1},
          769: { slidesPerView: 2},
          1045: { slidesPerView: 3},
          1415: { slidesPerView: 4 },

        }}
      >
        {cards.map((card, index) => {
          const bgColor = colors[index % colors.length];
          return (
            <SwiperSlide key={index}>
              <CardWrapper bgColor={bgColor}>
                {card}
              </CardWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
