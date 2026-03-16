
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <div className="mb-4 flex items-center">
                            <img src="/logo.png" alt="Sikkim Supreme" className="h-10 w-auto" />
                            <span className="ml-2 text-lg font-bold text-primary font-serif">Sikkim Supreme</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed text-justify pr-4">
                            Preserving the flavors of nature since 1956. A legacy brand from the Government Fruit Preservation Factory, Sikkim.
                        </p>

                        {/* MRC Branding */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                            <div className="mb-4 flex items-center">
                                <img src="/MRC LOGO.png" alt="MRC Agro" className="h-10 w-auto" />
                                <span className="ml-2 text-lg font-bold text-primary font-serif">MRC Agro</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed text-justify pr-4">
                                Marketed, distributed and webpage maintained by mrcagro.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Products</h4>
                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                            <li>Squash </li>
                            <li>Juices </li>
                            <li>Pickles </li>
                            <li>Pastes </li>
                            <li>Jams </li>
                            <li>Marmalades </li>
                            <li>KOSHELI</li>
                            <li>Premium Gift Packs</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Contact</h4>
                        <p className="text-gray-500 text-sm">
                            Singtam, East Sikkim<br />
                            Sikkim, India
                        </p>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} Sikkim Supreme. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
