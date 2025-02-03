import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Ads({
    children: slides,
    autoSlide = false,
    autoSlideInterval = 3000,
}) {
    const [curr, setCurr] = useState(0);
    const x = useMotionValue(0);
    const xInput = [-100, 0, 100];
    const opacityOutput = [0, 1, 0];
    const opacity = useTransform(x, xInput, opacityOutput);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [curr]);

    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset > 100 || velocity > 500) {
            prev();
        } else if (offset < -100 || velocity < -500) {
            next();
        }
    };

    return (
        <div className="w-full h-[320px] flex items-center justify-center bg-gray-100 flex-col shadow-xl shadow-black overflow-hidden">
            <div className="overflow-visible relative h-[80%] w-[30%]">
                <motion.div
                    className="flex"
                    drag="x"
                    dragConstraints={{ left: -((slides.length - 1) * 100) + "%", right: "0%" }}
                    animate={{ x: `-${curr * 100}%` }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    onDragEnd={handleDragEnd}
                    style={{ x, opacity }}
                >
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className={`w-full flex-shrink-0 transition-opacity duration-500 ${curr === i ? "opacity-100" : "opacity-50 blur-sm"}`}
                        >
                            {slide}
                        </div>
                    ))}
                </motion.div>
                
                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                        <ChevronLeft size={40} />
                    </button>
                    <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
                        <ChevronRight size={40} />
                    </button>
                </div>

                <div className="absolute bottom-4 right-0 left-0 items-end">
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