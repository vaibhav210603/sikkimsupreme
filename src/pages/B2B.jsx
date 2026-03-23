
import React from 'react';
import { motion } from 'framer-motion';

const B2BPage = () => {
    return (
        <div className="pt-24 pb-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">Partner with Us</h1>
                    <p className="text-lg text-justify text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        This page is dedicated to Business-to-Business (B2B) trade and commerce conducted directly with companies and wholesalers. We offer streamlined solutions that simplify the complexities of trade and commerce by providing direct, specialised, and tailored agreements. Serving as a foundation for effective business operations, our approach enhances product promotion, operational efficiency, and fosters long-term professional relationships.
                    </p>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm"
                    >
                        <h2 className="text-2xl font-serif font-bold text-dark mb-6">Business Inquiry Form</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Enter your company name" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Phone" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Email (e.g., info@company.com)" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                    <option>Distributor</option>
                                    <option>Retailer</option>
                                    <option>Hospitality / HORECA</option>
                                    <option>Corporate Gifting</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea rows="4" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-medium shadow-lg hover:bg-red-700 transition-colors transform hover:-translate-y-0.5">
                                Send Inquiry
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-dark mb-4">Why Partner With Us?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm">✓</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Authentic Himalayan Heritage</h4>
                                        <p className="text-gray-600 text-sm">Products crafted from recipes preserved since 1956.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm">✓</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Premium Quality</h4>
                                        <p className="text-gray-600 text-sm">Sourced from local farmers, ensuring the freshest ingredients.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm">✓</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Reliable Supply Chain</h4>
                                        <p className="text-gray-600 text-sm">Consistent delivery and support for our partners.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                       
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default B2BPage;
