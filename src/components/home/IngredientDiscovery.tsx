import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Droplets } from 'lucide-react';
import baobabOilPack from '../../assets/ramys-baobab-oil-pack.webp';
import carrotOil from '../../assets/ramys-carrot-oil-pack.webp';
import neemLeaves from '../../assets/neem-leaves.webp';
import sheaButter from '../../assets/ramys-shea-butter.webp';

interface BotanicalIngredient {
  id: string;
  name: string;
  botanicalName: string;
  origin: string;
  heroCompound: string;
  primaryBenefit: string;
  description: string;
  keyNutrients: string[];
  productLink: string;
  image: string;
}

export const IngredientDiscovery: React.FC = () => {
  const ingredients: BotanicalIngredient[] = [
    {
      id: 'baobab',
      name: 'African Baobab',
      botanicalName: 'Adansonia digitata',
      origin: 'Northern Nigerian Savannah',
      heroCompound: 'Sterols & Vitamins A, D, E, F',
      primaryBenefit: 'Deep Cellular Moisture & Collagen Support',
      description:
        'Harvested from wild "Tree of Life" trees reaching hundreds of years in age. Baobab seed oil absorbs almost instantly, revitalizing depleted skin barriers without leaving an occlusive heavy film.',
      keyNutrients: ['Omega 3, 6 & 9', 'Provitamin A', 'Natural Phytosterols'],
      productLink: '/product/baobab-seed-oil',
      image: baobabOilPack,
    },
    {
      id: 'neem',
      name: 'Virgin Neem Seed',
      botanicalName: 'Azadirachta indica',
      origin: 'Minna, Niger State',
      heroCompound: 'Active Azadirachtin & Nimbin',
      primaryBenefit: 'Targeted Clarifying & Microbiome Balance',
      description:
        'A revered botanical purifier. Renowned for calming inflamed blemishes, soothing scalp flaking, and protecting skin against environmental fungal and bacterial stressors.',
      keyNutrients: ['Azadirachtin', 'Palmitic Acid', 'Antioxidant Quercetin'],
      productLink: '/product/pure-neem-oil',
      image: neemLeaves,
    },
    {
      id: 'carrot',
      name: 'Wild Carrot Seed',
      botanicalName: 'Daucus carota',
      origin: 'Plateau River Basin',
      heroCompound: 'Beta-Carotene & Carotol',
      primaryBenefit: 'Tone Brightening & Plant Retinol Care',
      description:
        'Rich in carotenoids that stimulate natural epidermal renewal. Fades dark spots and sun-induced dullness while conferring a warm, sun-kissed luminous complexion.',
      keyNutrients: ['Beta-Carotene', 'Vitamin C Precursors', 'Carotol'],
      productLink: '/product/carrot-oil',
      image: carrotOil,
    },
    {
      id: 'shea',
      name: 'Wild Raw Shea',
      botanicalName: 'Vitellaria paradoxa',
      origin: 'Western Niger Belt',
      heroCompound: 'Cinnamic Acid & Stearic Lipids',
      primaryBenefit: 'Barrier Restoration & Moisture Locking',
      description:
        'Ethically gathered by regional women cooperatives. Unrefined and nutrient-dense, our raw shea butter melts seamlessly to seal in moisture and accelerate cracked skin repair.',
      keyNutrients: ['Allantoin', 'Cinnamic Acid', 'Stearic & Oleic Acids'],
      productLink: '/product/shea-butter-400g',
      image: sheaButter,
    },
  ];

  const [activeIngredient, setActiveIngredient] = useState<BotanicalIngredient>(ingredients[0]);

  return (
    <section className="py-20 sm:py-28 bg-[#102A22] text-[#F6F1E7] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#254C3C]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#747B50]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-semibold">
            Pharmacopeia of the Earth
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F6F1E7] font-normal">
            Interactive Ingredient Discovery
          </h2>
          <p className="text-[#F6F1E7]/70 text-sm sm:text-base font-light">
            Explore the indigenous Nigerian botanicals that empower our bio-compatible formulations.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {ingredients.map((ing) => {
            const isActive = ing.id === activeIngredient.id;
            return (
              <button
                key={ing.id}
                onClick={() => setActiveIngredient(ing)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#C6A66B] text-[#102A22] shadow-lg font-bold scale-105'
                    : 'bg-[#254C3C]/60 text-[#F6F1E7]/80 hover:bg-[#254C3C] hover:text-white border border-[#C6A66B]/20'
                }`}
              >
                {ing.name}
              </button>
            );
          })}
        </div>

        {/* Selected Ingredient Monograph Card */}
        <div className="bg-[#091712] border border-[#C6A66B]/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden bg-[#102A22] border border-[#C6A66B]/30 p-6 flex items-center justify-center shadow-inner group">
                <img
                  src={activeIngredient.image}
                  alt={activeIngredient.name}
                  className="max-h-[300px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#254C3C]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C6A66B]/40 text-[10px] uppercase tracking-widest text-[#E0CFA4]">
                  Certified Pure Extract
                </div>
              </div>
            </div>

            {/* Informational Profile */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-[#C6A66B] tracking-widest uppercase font-semibold">
                  <span>Origin: {activeIngredient.origin}</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F6F1E7]">
                  {activeIngredient.name}
                </h3>
                <p className="font-serif italic text-base text-[#E0CFA4]/80">
                  {activeIngredient.botanicalName}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#102A22] border border-[#254C3C] space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C6A66B] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Primary Bioactive Clinical Action</span>
                </div>
                <div className="text-base text-[#F6F1E7] font-medium">
                  {activeIngredient.primaryBenefit}
                </div>
              </div>

              <p className="text-[#F6F1E7]/80 text-sm sm:text-base leading-relaxed font-light">
                {activeIngredient.description}
              </p>

              {/* Nutrients Pills */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#F6F1E7]/60 font-semibold flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-[#C6A66B]" />
                  Verified Phytonutrient Profile:
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeIngredient.keyNutrients.map((nutrient, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-[#254C3C]/80 border border-[#C6A66B]/30 text-xs text-[#E0CFA4]"
                    >
                      {nutrient}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={activeIngredient.productLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C6A66B] hover:bg-[#E0CFA4] text-[#102A22] font-semibold text-xs uppercase tracking-widest transition-colors shadow-md"
                >
                  <span>View Product Formulation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
