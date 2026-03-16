
import React, { useState, useMemo } from 'react';
import products from '../data/products.json';
import { motion, AnimatePresence } from 'framer-motion';
import ProductModal from './ProductModal';
// import { Filter } from 'lucide-react';

const ProductGrid = () => {
    // Get unique categories and format them
    const categories = useMemo(() => {
        return [...new Set(products.map(p => p.category))];
    }, []);

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts = useMemo(() => {
        return products.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    const formatCategory = (cat) => {
        if (cat === 'KOSHELI') return 'Gift Packs';
        return cat.toLowerCase().replace(/(?:^|\s)\S/g, a => a.toUpperCase());
    }

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
                            onClick={() => setSelectedCategory(category)}
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
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                key={product.id}
                                onClick={() => setSelectedProduct(product)}
                                className="group bg-[#f29652] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 flex flex-col h-full"
                            >
                                <div className="h-64 overflow-hidden relative bg-gray-100">
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700 mixture-blend-multiply"
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
                                    <span className="text-xs text-white font-bold uppercase tracking-wider mb-3">
                                        {formatCategory(product.category)}
                                    </span>
                                    <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                    {product.size && (
                                        <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-md mb-2">
                                            {product.size}
                                        </span>
                                    )}



                                    {/* Description Snippet */}
                                    {product.description && (
                                        <p className="text-white/90 text-sm line-clamp-2 leading-relaxed opacity-90">
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

                {filteredProducts.length === 0 && (
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
