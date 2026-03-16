
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    const formatCategory = (cat) => {
        if (cat === 'KOSHELI') return 'Gift Packs';
        return cat.toLowerCase().replace(/(?:^|\s)\S/g, a => a.toUpperCase());
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 30 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative flex flex-col md:flex-row overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white text-dark rounded-full transition-colors z-20 backdrop-blur-md shadow-sm"
                    >
                        <X size={24} />
                    </button>

                    <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[300px] md:min-h-full">
                        {product.image ? (
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover mix-blend-multiply p-8"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-9xl text-gray-300 font-serif opacity-30 select-none">
                                    {product.name.charAt(0)}
                                </span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>

                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                        <div>
                            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-md mb-4 border border-accent/20">
                                {formatCategory(product.category)}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-3 leading-tight">
                                {product.name}
                            </h2>
                            {product.size && (
                                <p className="text-gray-500 font-medium text-lg mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                                    {product.size}
                                </p>
                            )}

                            {product.price && (
                                <p className="text-2xl font-serif font-bold text-primary mb-6">
                                    ₹
                                </p>
                            )}

                            <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg font-light">
                                {product.description ? (
                                    <p>{product.description}</p>
                                ) : (
                                    <p className="italic text-gray-400">Pure, natural goodness from Sikkim.</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                                        Sikkim Supreme
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        Government Fruit Preservation Factory
                                    </p>
                                </div>
                                {/* Optional: Action Button */}
                                {/* <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors">
                                    Enquire Now
                                </button> */}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductModal;
