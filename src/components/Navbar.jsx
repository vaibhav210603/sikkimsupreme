
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/#products' }, // Handle scroll in App/Home
        { name: 'About', path: '/about' },
        { name: 'Business', path: '/b2b' },
    ];

    // Helper to handle hash scrolling if we are on the home page
    const handleLinkClick = (path) => {
        setIsOpen(false);
        if (path.startsWith('/#') && location.pathname === '/') {
            const element = document.querySelector(path.substring(1));
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed w-full z-50 bg-white/100 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <img src="/logo.png" alt="Sikkim Supreme" className="h-16 w-auto" />
                    </Link>

                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <React.Fragment key={link.name}>
                                {link.path.startsWith('#') || link.path.startsWith('/#') ? (
                                    <a
                                        href={link.path}
                                        className="text-gray-600 hover:text-primary transition-colors duration-300 text-sm font-medium uppercase tracking-wide cursor-pointer"
                                        onClick={(e) => {
                                            if (location.pathname === '/' && link.path.startsWith('/#')) {
                                                e.preventDefault();
                                                const id = link.path.substring(2);
                                                const element = document.getElementById(id);
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }
                                        }}
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className={`text-gray-600 hover:text-primary transition-colors duration-300 text-sm font-medium uppercase tracking-wide ${location.pathname === link.path ? 'text-primary' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <React.Fragment key={link.name}>
                                    {link.path.startsWith('#') || link.path.startsWith('/#') ? (
                                        <a
                                            href={link.path}
                                            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                                            onClick={() => handleLinkClick(link.path)}
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
