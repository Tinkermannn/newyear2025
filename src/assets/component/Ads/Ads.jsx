import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

export default function Ads({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
}) {
    const [curr, setCurr] = useState(0);  // Start with the first slide (index 0)
    const swiperRef = useRef(null); // Ref to access the Swiper instance

    const prev = () => {
        swiperRef.current.swiper.slidePrev();
    };
    
    const next = () => {
        swiperRef.current.swiper.slideNext();
    };

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [curr]);

    return (
        <div className="w-full h-[320px] flex items-center justify-center bg-gray-100 flex-col shadow-xl shadow-black overflow-hidden">
            <div className="overflow-visible relative h-[80%] w-full flex">
            <Swiper
    spaceBetween={20}
    slidesPerView={3}
    centeredSlides={true}  // Center the current slide
    initialSlide={Math.floor(slides.length / 2)}  // Set the initial slide to the middle
    onSlideChange={(swiper) => setCurr(swiper.activeIndex)}
    loop={false}
    ref={swiperRef}
    speed={600} // Transisi lebih halus, kecepatan 600ms
    effect="fade" // Gunakan efek fade untuk transisi lebih halus
    fadeEffect={{
        crossFade: true, // Pastikan ada transisi yang halus antar slide
    }}
    className="w-full h-[105%]"
>
    {slides.map((slide, i) => (
        <SwiperSlide key={i}>
            <div
                className={`w-full flex-shrink-0 transition-opacity duration-500 items-center justify-center ${
                    curr === i
                        ? "opacity-100 blur-none"
                        : curr === i - 1 || curr === i + 1
                        ? `opacity-50 blur-sm scale-75 ${curr === i - 1 ? "-mx-14" : "mx-14"}`
                        : "opacity-0"
                }`}
            >
                {slide}
            </div>
        </SwiperSlide>
    ))}
</Swiper>

                
                {/* Indikator Posisi Slide */}
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-1 z-10">
                    <div className="flex items-center justify-center gap-1">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`transition-all w-5 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
