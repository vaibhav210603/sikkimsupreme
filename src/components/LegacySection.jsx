import React from 'react';
import { motion } from 'framer-motion';

const LegacySection = () => {
    return (
        <section className="py-12 md:py-24 bg-[#f7eae1] text-dark overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-left order-2 md:order-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-block border border-primary/20 px-4 py-1.5 md:px-6 md:py-2 rounded-full mb-4 md:mb-6 bg-white/50"
                        >
                            <span className="font-bold tracking-widest text-xs md:text-sm uppercase text-primary">From the Garden of Nature Since 1956</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-2 leading-tight text-black"
                        >
                            A Legacy Brand From Sikkim.
                        </motion.h2>

                        <p className="text-xl md:text-2xl text-primary font-serif italic mb-4 md:mb-8">Safe Food, Proven Integrity.</p>

                        <div className="w-16 md:w-24 h-1 bg-primary mb-6 md:mb-8 rounded-full"></div>

                        <div className="text-base md:text-lg leading-relaxed font-light text-gray-800 space-y-4">
                            <p>
                                The Government Fruit Preservation Factory (GFPF) is a leader in food and beverage manufacturing in Sikkim, with products marketed under the brand name "Sikkim Supreme."
                            </p>
                            <p>
                                GFPF has diversified its operations to include the processing of various fruits, vegetables, and allied food products. It specializes in producing from organically sourced products pickles, juices, jams, and jellies, as well as an extensive range of juices, squashes, and other processed items. These products are renowned for their high-quality, authentic Himalayan ingredients.
                            </p>
                            <p>
                                “Sikkim Supreme” is a brand that encompasses a variety of food products, particularly those recognized with GI tags. These offerings reflect Sikkim’s culinary heritage and exemplify the state’s dedication to preserving its distinctive flavours and traditions.
                            </p>
                            <p>
                                GFPF attained ISO 22000 certification, an internationally recognized standard for Food Safety Management Systems (FSMS), on July 22, 2025. This achievement underscores its commitment to food safety and quality.
                            </p>
                            <p>
                                Sikkim is the world’s first fully organic state, having converted over 75,000 hectares of agricultural land to sustainable practices. Located in the scenic valley of Singtam, the GFPF facility benefits from immediate access to farmland certified organic by the Sikkim State Organic Certification Agency (SSOCA), enabling the production of organic goods for both domestic and global markets.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative order-1 md:order-2 mb-8 md:mb-0 hidden md:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <img
                                src="/images/legacy_catalogue.png"
                                alt="Sikkim Supreme Catalogue"
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay/Sheen effect if desired */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Decorative element behind image */}
                        <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary/5 border-2 border-primary/10 rounded-2xl transform rotate-6"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LegacySection;
