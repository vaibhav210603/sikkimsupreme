
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    const formatCategory = (cat) => {
        if (cat === 'KOSHELI') return 'Gift Packs';
        if (cat === 'WATER') return 'Water';
        return cat.toLowerCase().replace(/(?:^|\s)\S/g, a => a.toUpperCase());
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 60 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 60 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:max-w-lg md:max-w-4xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto relative flex flex-col md:flex-row"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-dark rounded-full transition-colors z-20 backdrop-blur-md shadow-md"
                    >
                        <X size={20} />
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 bg-gray-50 flex-shrink-0 overflow-hidden h-48 sm:h-56 md:h-auto md:min-h-[400px] relative">
                        {product.image ? (
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain p-6"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-7xl md:text-9xl text-gray-200 font-serif opacity-40 select-none">
                                    {product.name.charAt(0)}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="w-full md:w-1/2 p-5 sm:p-7 md:p-10 flex flex-col justify-center bg-white">
                        <div>
                            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider rounded-md mb-3 border border-accent/20">
                                {formatCategory(product.category)}
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-dark mb-2 leading-tight">
                                {product.name}
                            </h2>
                            {product.size && (
                                <p className="text-gray-500 font-medium text-base mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary/60"></span>
                                    {product.size}
                                </p>
                            )}

                            <div className="space-y-3 text-gray-600 leading-relaxed text-sm sm:text-base font-light mt-3">
                                {product.description ? (
                                    <p>{product.description}</p>
                                ) : (
                                    <p className="italic text-gray-400">Pure, natural goodness from Sikkim.</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-6 pt-5 border-t border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="flex-1">
                                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
                                        Sikkim Supreme
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        Government Fruit Preservation Factory
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProductModal;
