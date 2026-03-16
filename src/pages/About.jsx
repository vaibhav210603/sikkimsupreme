
import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="pt-24 pb-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-2 block">Since 1956</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-dark mb-6">Our Legacy</h1>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                {/* Content Section 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/sikkim-landscape.png"
                                alt="Sikkim Landscape"
                                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                                onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Sikkim+Landscape'; }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-serif italic text-lg">"Nature's bounty, preserved with care."</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-serif font-bold text-dark">The Pride of Sikkim</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The Government Fruit Preservation Factory (GFPF) was established by the Hon’ble Chogyal of Sikkim now a fully owned Public Sector Undertaking (PSU) of Government of Sikkim, operating under Commerce & Industry Department. Established in 1956 to process local fruits like oranges under the brand name “Sikkim Supreme.” Over time, GFPF expanded its operations to include the processing of a variety of fruits, vegetables, and related food products. The factory is supported by a committed and skilled team that assumes full responsibility for their work, maintaining a strong focus on quality at every stage of production. Adhering to scientific methods, GFPF’s processes have garnered positive recognition from industry professionals, government authorities, and valued customers alike.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We are committed to continuous innovation, developing new products that align with evolving customer needs. Our offerings enjoy popularity both locally and nationwide. Trust and quality serve as foundational principles of the modern food processing industry, fostering strong relationships between manufacturers and health-conscious consumers. By maintaining high levels of transparency and implementing clear, accurate labelling, we empower consumers to verify the origin and history of our products—thereby strengthening our brand and cultivating lasting loyalty.
                        </p>
                    </motion.div>
                </div>

                {/* Content Section 2 (Reversed) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 md:order-1 order-2"
                    >
                        <h2 className="text-3xl font-serif font-bold text-dark">One District One Product</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The One District One Product (ODOP) initiative of Government of India is designed to support indigenous products and crafts distinctive to each district, thereby enhancing local economic growth and employment prospects. Through this scheme, districts identify and promote their unique specialties, fostering recognition for regional expertise. The initiative serves to highlight the broad cultural and economic diversity of India and contributes to the preservation of traditional knowledge and craftsmanship.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            <b>Empowering Local Economies through District-Specific Branding.</b> At GFPF, our approach involves the careful identification, effective branding, and strategic promotion of distinctive agricultural products from each district. By focusing on the unique attributes of these products, we are able to elevate local producers, ensuring their offerings gain the recognition they deserve. This targeted strategy not only uplifts the income of local communities but also plays a crucial role in reducing dependence on intermediaries. As a result, farmers and producers benefit directly, enabling a more sustainable and self-reliant agricultural sector.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:order-2 order-1"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/factory-process.png"
                                alt="Factory Process"
                                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                                onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Preparation+Process'; }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Content Section 3 */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl font-serif font-bold text-dark">Brief on Safety Standards:</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            In today’s globalised supply chain environment, visible attributes such as freshness, taste, and nutrition, alongside critical non-visible factors including ethical sourcing and safety, directly impact consumer trust. GFPF stands as a leader in the food processing industry in Sikkim, offering wholesome ingredients. By emphasising food safety, product consistency, transparency, and genuine farm-to-table assurance, GFPF aligns its practices with industry standards for quality control and assurance, implementing both proactive and responsive measures to uphold excellence.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
