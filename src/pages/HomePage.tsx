import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { TrustStrip } from '../components/home/TrustStrip';
import { EditorialIntro } from '../components/home/EditorialIntro';
import { IngredientDiscovery } from '../components/home/IngredientDiscovery';
import { FeaturedCollection } from '../components/home/FeaturedCollection';
import { ProcessStory } from '../components/home/ProcessStory';
import { ProductSpotlight } from '../components/home/ProductSpotlight';
import { FeaturedOilsSection } from '../components/home/FeaturedOilsSection';
import { PhotoGallery } from '../components/home/PhotoGallery';
import { BrandStorySection } from '../components/home/BrandStorySection';
import { WholesaleBanner } from '../components/home/WholesaleBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero with Hibiscus Trio product image */}
      <HeroSection />

      {/* Trust badges bar */}
      <TrustStrip />

      {/* Editorial brand intro with product photos */}
      <EditorialIntro />

      {/* Interactive ingredient discovery */}
      <IngredientDiscovery />

      {/* Featured product cards */}
      <FeaturedCollection />

      {/* Cold-press process story */}
      <ProcessStory />

      {/* Baobab product spotlight (replaces 3D viewer) */}
      <ProductSpotlight />

      {/* Featured Oils — olive, baobab, neem 1L flyers with lightbox */}
      <FeaturedOilsSection />

      {/* Photo gallery — all product photos in a masonry grid */}
      <PhotoGallery />

      {/* Brand story */}
      <BrandStorySection />

      {/* Wholesale CTA */}
      <WholesaleBanner />
    </div>
  );
};
