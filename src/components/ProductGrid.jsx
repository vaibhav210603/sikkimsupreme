
import React, { useState, useMemo } from 'react';
import products from '../data/products.json';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProductModal from './ProductModal';

// Subtle background colors per category — designed to complement the warm #f7eae1 page bg
const categoryBgColors = {
    SQUASH: '#ffffffff',       // warm amber tint
    JUICE: '#ffffffff',        // soft golden
    PICKLES: '#ffffffff',      // warm spice
    JAMS: '#ffffffff',         // berry blush
    'OTHER PRODUCTS': '#ffffffff', // earthy sage
    KOSHELI: '#ffffffff',
    WATER: '#ffffffff',    // warm cream
};

const ProductGrid = () => {
    const categories = useMemo(() => {
        return [...new Set(products.map(p => p.category))];
    }, []);

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showMore, setShowMore] = useState(false);

    // Split products into those with images (shown) and without (hidden behind Show More)
    const { withImage, withoutImage } = useMemo(() => {
        const categoryProducts = products.filter(p => p.category === selectedCategory);
        return {
            withImage: categoryProducts.filter(p => p.image),
            withoutImage: categoryProducts.filter(p => !p.image),
        };
    }, [selectedCategory]);

    // Reset showMore when category changes
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setShowMore(false);
    };

    const displayedProducts = showMore ? [...withImage, ...withoutImage] : withImage;
    const hiddenCount = withoutImage.length;

    const formatCategory = (cat) => {
        if (cat === 'KOSHELI') return 'Gift Packs';
        return cat.toLowerCase().replace(/(?:^|\s)\S/g, a => a.toUpperCase());
    }

    const tileBg = categoryBgColors[selectedCategory] || '#FFF3E0';

    return (
        <section id="products" className="py-2 bg-[#f7eae1] scroll-mt-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Our Collection</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-dark">Curated from Nature</h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === category
                                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 transform scale-105'
                                : 'bg-white border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                                }`}
                        >
                            {formatCategory(category)}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence>
                        {displayedProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                key={product.id}
                                onClick={() => setSelectedProduct(product)}
                                className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 flex flex-col h-full"
                                style={{ backgroundColor: product.image ? tileBg : '#f29652' }}
                            >
                                <div className="h-64 overflow-hidden relative" style={{ backgroundColor: product.image ? tileBg : '#f5f5f5' }}>
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                                            style={{ mixBlendMode: 'multiply' }}
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300">
                                            <span className="text-6xl font-serif opacity-30">{product.name.charAt(0)}</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                                </div>

                                <div className="p-8 flex-grow flex flex-col items-center text-center">
                                    <span className={`text-xs font-bold uppercase tracking-wider mb-3 ${product.image ? 'text-gray-500' : 'text-white'}`}>
                                        {formatCategory(product.category)}
                                    </span>
                                    <h3 className={`text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors ${product.image ? 'text-dark' : 'text-white'}`}>
                                        {product.name}
                                    </h3>
                                    {product.size && (
                                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-md mb-2 ${product.image
                                            ? 'bg-dark/10 text-dark/70'
                                            : 'bg-white/20 text-white'
                                            }`}>
                                            {product.size}
                                        </span>
                                    )}

                                    {product.description && (
                                        <p className={`text-sm line-clamp-2 leading-relaxed opacity-90 ${product.image ? 'text-gray-600' : 'text-white/90'}`}>
                                            {product.description}
                                        </p>
                                    )}

                                    <div className="mt-auto pt-6 w-full">
                                        <button className="text-primary text-sm font-semibold uppercase tracking-wide group-hover:underline underline-offset-4 decoration-accent decoration-2">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Show More / Show Less */}
                {hiddenCount > 0 && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="group flex items-center gap-2 px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-medium text-sm
                                       hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                        >
                            {showMore ? (
                                <>
                                    Show Less
                                    <ChevronUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                                </>
                            ) : (
                                <>
                                    Show More ({hiddenCount} more)
                                    <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                )}

                {displayedProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No products found in this category.</p>
                    </div>
                )}
            </div>

            {/* Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
};

export default ProductGrid;
