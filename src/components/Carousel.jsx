import React from 'react'
import banner1 from "../assets/images/banners/hero-banner-1.jpg"
import banner2 from "../assets/images/banners/hero-banner-2.jpg"
import banner3 from "../assets/images/banners/hero-banner-3.jpg"
import banner4 from "../assets/images/banners/hero-banner-4.jpg"
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel = () => {
    const slides = [
        {
            img: banner1,
            title: "Ironheart",
            desc: "Young genius Riri Williams returns home, where her cutting-edge tech clashes with dark magic and a rising threat known as The Hood.",
        },
        {
            img: banner2,
            title: "Hawkeye",
            desc: "Clint Barton teams up with young archer Kate Bishop during the holidays to confront ghosts from his past and a criminal underworld.",
        },
        {
            img: banner3,
            title: "Daredevil: Born Again",
            desc: "As Matt Murdock battles crime in the courtroom and on the streets, Wilson Fisk resurfaces with dangerous ambitions for New York.",
        },
        {
            img: banner4,
            title: "Ms. Marvel",
            desc: "Kamala Khan discovers her powers and identity as a mutant, while navigating life as a superhero and a fangirl in Jersey City.",
        },
    ];



    const autoplayOptions = Autoplay({ delay: 30000, stopOnInteraction: false });

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplayOptions]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    React.useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        });
    }, [emblaApi]);

    return (
        <div className="relative overflow-hidden" ref={emblaRef}>
            <div className="flex">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative min-w-full h-[600px]"
                    >
                        {/* Image */}
                        <img
                            src={slide.img}
                            alt="Banner"
                            className="w-full h-full object-cover max-md:object-[65%]"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0">
                            {/* Mobile: Bottom to Top Gradient */}
                            <div className="block md:hidden absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/90 via-black/90 to-transparent"></div>
                            {/* Desktop: Left to Right Gradient */}
                            <div className="hidden md:block absolute left-0 w-2/3 h-full bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                        </div>

                        {/* Text Content */}
                        <div className="absolute inset-0 flex flex-col justify-end md:justify-center items-start px-6  md:px-25 lg:px-30 xl:px-40 pb-6 md:pb-0">
                            <div className="text-white max-w-xl space-y-3">
                                <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-md font-marvel tracking-wider">
                                    {slide.title}
                                </h1>
                                <p className="text-base md:text-lg font-medium drop-shadow-md">
                                    {slide.desc}
                                </p>
                                <button className="mt-2 bg-primary hover:bg-primary-hover text-white font-semibold px-4 py-2 shadow-md transition font-marvel tracking-wider">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={scrollPrev}
                className="hidden sm:flex items-center justify-center absolute top-1/2 left-4 -translate-y-1/2 z-30 bg-white text-black rounded-full p-2 shadow hover:bg-gray-200"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={scrollNext}
                className="hidden sm:flex items-center justify-center absolute top-1/2 right-4 -translate-y-1/2 z-30 bg-white text-black rounded-full p-2 shadow hover:bg-gray-200"
            >
                <ChevronRight />
            </button>

            <div className="absolute max-md:hidden bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => emblaApi?.scrollTo(idx)}
                        className={`w-3 h-3 rounded-full transition duration-300 ${selectedIndex === idx ? "bg-white" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>

    )
}

export default Carousel