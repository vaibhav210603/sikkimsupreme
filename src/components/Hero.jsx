
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        type: 'video',
        src: "/Beautiful_cinematic_slowmotion_202602161452_b.mp4",
        align: 'center',
        subtitle: 'Est. 1956',
        title: <>Nature's Finest <br /> <span className="text-accent italic">Preserved</span></>,
        description: "From the pristine farms of Sikkim to your table. Experience the authentic taste of Himalayan craftsmanship.",
        buttonText: "Explore Collection",
        link: "#products"
    },
    {
        type: 'image',
        src: "/Sikkim 1.png",
        align: 'left',
        subtitle: 'Refreshing & Natural',
        title: <>Squashes & <br /> <span className="text-accent italic">Juices</span></>,
        description: "Authentic Himalayan fruit squashes and freshly pressed juices, bringing you the pure taste of nature's bounty.",
        buttonText: "Taste Freshness",
        link: "#products"
    },
    {
        type: 'image',
        src: "/Sikkim 2.png",
        align: 'left',
        subtitle: 'Sweet Preserves',
        title: <>Jams & <br /> <span className="text-accent italic">Marmalades</span></>,
        description: "Crafted with the finest organic fruits. Our traditional jams and marmalades add sweetness to every meal.",
        buttonText: "Discover Jams",
        link: "#products"
    },
    {
        type: 'image',
        src: "/Sikkim 3.png",
        align: 'left',
        subtitle: 'Perfect for Occasions',
        title: <>Special <br /> <span className="text-accent italic">Gift Packs</span></>,
        description: "Share the joy of authentic Sikkim flavors with our carefully curated gift packs, perfect for your loved ones.",
        buttonText: "View Gift Packs",
        link: "#products"
    },
    {
        type: 'image',
        src: "/Sikkim 4.png",
        align: 'left',
        subtitle: 'Traditional Treats',
        title: <>Sikkim <br /> <span className="text-accent italic">Kausheli</span></>,
        description: "Experience the unique and traditional Kausheli treats, lovingly prepared using time-honored Himalayan recipes.",
        buttonText: "Explore Kausheli",
        link: "#products"
    },
    {
        type: 'image',
        src: "/Sikkim 5.png",
        align: 'left',
        subtitle: 'Pure & Crisp',
        title: <>Packaged <br /> <span className="text-accent italic">Water</span></>,
        description: "Crystal clear and thoroughly purified drinking water, sourced responsibly to keep you refreshed all day long.",
        buttonText: "Learn More",
        link: "#products"
    },
    {
        type: 'image',
        src: "/Sikkim 6.png",
        align: 'left',
        subtitle: 'Tangy & Spicy',
        title: <>Authentic <br /> <span className="text-accent italic">Pickles</span></>,
        description: "Spice up your meals with our range of traditional Himalayan pickles, including the famous Dalle Khursani.",
        buttonText: "Shop Pickles",
        link: "#products"
    },
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    return (
        <section className="relative h-[65vh] md:h-[85vh] flex items-center overflow-hidden bg-black justify-start">
            {/* Background Slider */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100 z-0" : "opacity-0 -z-10"
                        }`}
                >
                    {slide.type === 'video' ? (
                        <video
                            src={slide.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-90 scale-105"
                        />
                    ) : (
                        <img
                            src={slide.src}
                            alt="Sikkim Supreme Background"
                            className="w-full h-full object-cover opacity-90 scale-105"
                        />
                    )}
                    <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                </div>
            ))}

            <div className={`relative z-10 w-full px-4 md:px-12 lg:px-24 max-w-7xl mx-auto text-white flex ${slides[currentSlide].align === 'center' ? 'justify-center text-center' : 'justify-start text-left'}`}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: slides[currentSlide].align === 'center' ? 0 : -20, y: slides[currentSlide].align === 'center' ? 20 : 0 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        className={`max-w-4xl ${slides[currentSlide].align === 'center' ? 'mx-auto' : ''}`}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className={`mb-4 md:mb-6 flex items-center gap-4 ${slides[currentSlide].align === 'center' ? 'justify-center' : 'justify-start'}`}
                        >
                            <div className="h-[1px] w-8 md:w-12 bg-accent/70"></div>
                            <span className="text-accent uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-sm font-bold shadow-sm">
                                {slides[currentSlide].subtitle}
                            </span>
                            <div className="h-[1px] w-8 md:w-12 bg-accent/70"></div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-4 md:mb-6 tracking-tight text-white drop-shadow-2xl"
                        >
                            {slides[currentSlide].title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className={`text-gray-100 text-lg md:text-xl mb-10 font-light leading-relaxed drop-shadow-md ${slides[currentSlide].align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
                        >
                            {slides[currentSlide].description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className={`flex flex-col sm:flex-row gap-4 ${slides[currentSlide].align === 'center' ? 'justify-center' : 'justify-start'}`}
                        >
                            <a href={slides[currentSlide].link} className="group bg-accent text-white px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-accent/50 hover:-translate-y-1 font-medium tracking-wide flex items-center justify-center gap-2 max-w-max">
                                {slides[currentSlide].buttonText}
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slider Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-accent w-8" : "bg-white/50 hover:bg-white"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
