
import React from 'react';
import Hero from '../components/Hero';
import LegacySection from '../components/LegacySection';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
    return (
        <main>
            <Hero />
            <ProductGrid />
            <LegacySection />
            
        </main>
    );
};

export default Home;
