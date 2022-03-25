import { useRef, useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Item from "./Item";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import useViewport from "../../hooks/useViewport";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';





export default function Row({row, content}) {


    if (typeof window !== 'undefined') {
        const { width } = useViewport();
    }
    else {
        return null;
    }

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    // Swiper config

    const customSwiperParams = {
        observer: true,
        observeParents: true,
        navigation: {
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
        },
        breakpoints: {
            1378: { slidesPerView: 6, slidesPerGroup: 6 },
            998: { slidesPerView: 4, slidesPerGroup: 4 },            
            625: { slidesPerView: 3, slidesPerGroup: 3 },            
            330: { slidesPerView: 2, slidesPerGroup: 2 },            
            0: { slidesPerView: 1.5, slidesPerGroup: 1 },            
        },
        loopAdditionalSlides: width >= 1378 ? 5 : width >= 998 ? 3 : width >= 625 ? 2 : 2,
        pagination: true,
        loop: false,
        grabCursor: false,
        draggable: false,
        preventClicksPropagation: true,
        preventClicks: true,
        slideToClickedSlide: false,
        allowTouchMove: true
    };
    const rightMouseOver = (e) => {
        if (e.currentTarget.classList.contains('right')) {e.currentTarget.parentElement.classList.add('is-right')}
        else if (e.currentTarget.classList.contains('left')) {e.currentTarget.parentElement.classList.add('is-left')}
    }

    const rightMouseOut = (e) => {
        e.currentTarget.parentElement.classList.remove('is-right', 'is-left')
    }

    const insertPositionClassName = (index) => {
		const i = index + 1

		if (i === 1) return 'left'
		else if (i === 20) return 'right'

		if (width >= 1378) {
			if ([7, 13, 19].includes(i)) return 'left'
			else if ([6, 12, 18].includes(i)) return 'right'
		} else if (width >= 998) {
			if ([5, 9, 13, 17].includes(i)) return 'left'
			else if ([4, 8, 12, 16].includes(i)) return 'right'
		} else if (width >= 768) {
			if ([4, 7, 10, 13, 16].includes(i)) return 'left'
			else if ([3, 6, 9, 12, 15, 18].includes(i)) return 'right'
		}
	}

    // Swiper config end

    const movies = row.results.map((movie) => {

        if (!movie.backdrop_path) {
            return <></>
        }
        return (
            <SwiperSlide>
                <Item props={movie} content={content} />
            </SwiperSlide>
        )
    })


    return <>
        <div className="mb-4">
            <section className="section1">
                <h2 className="text-whiteflix font-inter600 text-2xl mb-2">{row.name}</h2>
                <div className="overflow-hidden">
                    <Swiper
                        {...customSwiperParams}
                        onBeforeInit={(swiper) => {
							swiper.params.navigation.prevEl = navigationPrevRef.current;
							swiper.params.navigation.nextEl = navigationNextRef.current;
						}}    
                    >
                        {movies}
                    </Swiper>
                </div>
            </section>
        </div>
    </>
}