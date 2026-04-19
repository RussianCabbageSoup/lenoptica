import React from "react";
import CarouselSlide from "./CarouselSlide";
import { useEffect } from "react";
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import prevBtn from "../../images/control/Arrow1.svg";
import nextBtn from "../../images/control/Arrow2.svg";

function CarouselSlides() {
    useEffect(() => {
        const swiper = new Swiper('.Carousel', {
            slidesPerView: 1.8,
            centeredSlides: true,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
            breakpoints: {
                0: { slidesPerView: 1 },      // от 0px до 699px
                700: { slidesPerView: 2 },    // от 700px до 1049px
                1050: { slidesPerView: 2 },   // от 1050px до 1299px
                1300: { slidesPerView: 1.8 }  // от 1300px и выше
            },
        });

        return () => {
            if (swiper) swiper.destroy();
        };
    }, []);

    return (
        <div className="swiper Carousel">
            <div className="swiper-wrapper">
                <CarouselSlide />
                <CarouselSlide />
                <CarouselSlide />
                <CarouselSlide />
                <CarouselSlide />
                <CarouselSlide />
            </div>
            <div className="swiper-pagination" />
            <div className="swiper__buttons-box">
                <div className="swiper-button-prev">
                    <img src={prevBtn} alt="left" />
                </div>
                <div className="swiper-button-next">
                    <img src={nextBtn} alt="right" />
                </div>
            </div>
        </div>

    );
}

export default CarouselSlides;