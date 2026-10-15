import { Product } from '../types';

// ─── Product photos from src/assets/ ─────────────────────────────────────
import baobabOilPack from '../assets/ramys-baobab-oil-pack.webp';
import carrotOil from '../assets/ramys-carrot-oil-pack.webp';
import hibiscus50ml from '../assets/hibiscus-seed-oil-50ml.png';
import hibiscusTrio from '../assets/hibiscus-zobo-seed-oil-trio.png';
import massageOilPair from '../assets/massage-oil-50ml-pair.png';
import moringaOil from '../assets/moringa-seed-oil-100ml.png';
import neemOilPack from '../assets/ramys-neem-oil-pack.webp';
import neemOilSingle from '../assets/ramys-neem-oil.webp';
import sheaButter from '../assets/ramys-shea-butter.webp';
import bodyCareSet from '../assets/body-care-set.png';

export const PRODUCTS: Product[] = [
  // ─── SEED OILS ───────────────────────────────────────────────────────────
  {
    id: 'hibiscus-zobo-seed-oil',
    name: 'Hibiscus (Zobo) Seed Oil',
    slug: 'hibiscus-zobo-seed-oil',
    tagline: 'Rich in Vitamin C & Antioxidants — Brightening & Anti-Ageing',
    category: 'Oils',
    subCategory: 'Brightening Elixir',
    basePrice: 0,
    currency: 'NGN',
    variants: [
      { size: '50ml Dropper', price: 0, inStock: true, sku: 'RMY-HIB-50' },
      { size: '100ml Dropper', price: 0, inStock: true, sku: 'RMY-HIB-100' },
    ],
    description:
      'Cold-pressed from the seeds of the iconic Nigerian Zobo (hibiscus) flower. Packed with Vitamin C, anthocyanins, and natural AHAs that gently resurface dull skin, even tone, and promote a lit-from-within luminosity.',
    benefits: [
      'Natural source of Vitamin C for brightening and collagen support',
      'Anthocyanins protect against oxidative free-radical damage',
      'Gentle exfoliating AHAs improve skin texture and tone',
      'Lightweight and fast-absorbing — suitable for all skin types',
    ],
    bioactiveCompounds: ['Vitamin C', 'Anthocyanins', 'AHAs', 'Linoleic Acid'],
    extractionMethod: 'Mechanical Cold-Pressed below 49°C',
    botanicalSource: 'Hibiscus sabdariffa (Zobo)',
    origin: 'Northern Nigeria',
    usageInstructions:
      'Apply 2-3 drops to clean, slightly damp skin morning or evening. Can be mixed with moisturiser or used alone.',
    images: {
      primary: hibiscusTrio,
      gallery: [hibiscus50ml],
      alt: "Ramy's Hibiscus (Zobo) Seed Oil, three 100ml bottles",
    },
    certifications: ['NAFDAC Certified', 'FDA Registered Facility'],
    inStock: true,
    isBestseller: true,
    rating: 4.9,
    reviewCount: 22,
  },
  {
    id: 'moringa-seed-oil',
    name: 'Moringa Seed Oil 100ml',
    slug: 'moringa-seed-oil',
    tagline: 'The "Miracle Tree" Concentrate — Anti-Pollution Youth Defense',
    category: 'Oils',
    subCategory: 'Youth Restoring Serum',
    basePrice: 0,
    currency: 'NGN',
    variants: [
      { size: '50ml Dropper', price: 0, inStock: true, sku: 'RMY-MOR-50' },
      { size: '100ml Dropper', price: 0, inStock: true, sku: 'RMY-MOR-100' },
      { size: '1 Litre Dispensary', price: 0, inStock: true, sku: 'RMY-MOR-1L' },
    ],
    description:
      'Moringa oleifera seeds yield an oil prized since antiquity for its high behenic acid concentration. Highly stable and resistant to rancidity, it builds an invisible breathable shield over skin that traps moisture and repels city smog particulate matter.',
    benefits: [
      'Repels environmental free radicals and micro-pollutants',
      'Contains plant cytokinin zeatin for cell longevity and firm texture',
      'Deeply nourishes dry scalp and encourages hair density',
      'Leaves a silky dry-finish touch without oily residue',
    ],
    bioactiveCompounds: ['Behenic Acid (7%)', 'Zeatin', 'Oleic Acid (72%)', 'Quercetin'],
    extractionMethod: 'Mechanical Cold Extraction < 45 degrees C',
    botanicalSource: 'Moringa oleifera (Drumstick Tree)',
    origin: 'Kaduna-Niger River Basin',
    usageInstructions:
      "Apply 2-3 drops as the final daytime step before SPF, or gently press around eyes to smooth crow's feet.",
    images: {
      primary: moringaOil,
      gallery: [moringaOil],
      alt: "Ramy's Moringa Seed Oil 100ml dark amber dropper bottle",
    },
    certifications: ['NAFDAC Certified', 'FDA Registered Facility'],
    inStock: true,
    isBestseller: false,
    rating: 4.91,
    reviewCount: 24,
  },
  {
    id: 'baobab-seed-oil',
    name: 'Baobab Seed Oil',
    slug: 'baobab-seed-oil',
    tagline: 'The "Tree of Life" Elixir — Intense Cellular Hydration',
    category: 'Oils',
    subCategory: 'Facial & Body Oil',
    basePrice: 0,
    currency: 'NGN',
    variants: [
      { size: '50ml Dropper', price: 0, inStock: true, sku: 'RMY-BAO-50' },
      { size: '100ml Dropper', price: 0, inStock: true, sku: 'RMY-BAO-100' },
      { size: '1 Litre Dispensary', price: 0, inStock: true, sku: 'RMY-BAO-1L' },
      { size: 'Carton (24 pcs 100ml)', price: 0, inStock: true, sku: 'RMY-BAO-CRT' },
    ],
    description:
      'Extracted from the resilient seeds of the ancient African Baobab tree (Adansonia digitata). Rich in vitamins A, D, E, and F, alongside sterols and essential omega fatty acids. Penetrates deeply without greasy residue, softening fine lines and locking in moisture.',
    benefits: [
      'Rapidly absorbs to quench parched, dehydrated skin',
      'High vitamin E & F content supports barrier repair and elasticity',
      'Non-comedogenic profile (does not clog pores)',
      'Promotes follicle vitality and sleek, resilient hair strands',
    ],
    bioactiveCompounds: ['Vitamin A & E', 'Omega 3, 6, 9 Fatty Acids', 'Sterols & Polyphenols'],
    extractionMethod: 'Pure Mechanical Cold-Pressed below 49 degrees C (120 F)',
    botanicalSource: 'Adansonia digitata (African Baobab)',
    origin: 'Northern Nigeria Savannah',
    usageInstructions:
      'Warm 3-4 drops between clean palms and press gently onto damp face, neck, or decolletage after cleansing.',
    images: {
      primary: baobabOilPack,
      gallery: [baobabOilPack],
      alt: "Ramy's Baobab Seed Oil in multiple bottle sizes",
    },
    certifications: ['NAFDAC Certified', 'FDA Registered Facility', '100% Organic Sourcing'],
    inStock: true,
    isBestseller: true,
    rating: 4.95,
    reviewCount: 38,
    featuredQuote: 'The golden nectar that transformed dull textures into velvet radiance within 10 days.',
  },
  {
    id: 'pure-neem-oil',
    name: 'Pure Neem Oil',
    slug: 'pure-neem-oil',
    tagline: 'Ancient Clarifying Purifier — Unmatched Bioactive Defense',
    category: 'Oils',
    subCategory: 'Clarifying Treatment',
    basePrice: 0,
    currency: 'NGN',
    variants: [
      { size: '50ml Dropper', price: 0, inStock: true, sku: 'RMY-NEM-50' },
      { size: '100ml Dropper', price: 0, inStock: true, sku: 'RMY-NEM-100' },
      { size: '1 Litre Dispensary', price: 0, inStock: true, sku: 'RMY-NEM-1L' },
    ],
    description:
      'Extracted cold from wild-harvested Azadirachta indica seeds in Niger State. Renowned for centuries in herbal pharmacology, our pure Neem Oil boasts high natural azadirachtin and nimbin concentrations.',
    benefits: [
      'Targeted antimicrobial action against blemish-causing bacteria',
      'Rapidly alleviates scalp flakiness, dryness, and itchiness',
      'Calms redness associated with eczema and reactive skin',
      'Strengthens nails and cuticle beds',
    ],
    bioactiveCompounds: ['Azadirachtin', 'Nimbin', 'Oleic & Stearic Acid', 'Carotenoids'],
    extractionMethod: 'Virgin Mechanical Cold-Pressed below 49 degrees C',
    botanicalSource: 'Azadirachta indica (Neem)',
    origin: 'Minna, Niger State, Nigeria',
    usageInstructions:
      'For facial spot treatment, dab a single drop directly onto blemishes at night. For overall face use, blend 2 drops into your favourite moisturizer.',
    images: {
      primary: neemOilPack,
      gallery: [neemOilSingle],
      alt: "Ramy's Pure Neem Seed Oil in multiple bottle sizes",
    },
    certifications: ['NAFDAC Certified', 'FDA Registered Facility', 'Lab-Tested Purity'],
    inStock: true,
    isBestseller: true,
    rating: 4.88,
    reviewCount: 42,
    featuredQuote: 'Nothing has calmed inflammatory acne as gently and decisively as this cold-pressed neem.',
  },
  {
    id: 'carrot-oil',
    name: 'Carrot Oil',
    slug: 'carrot-oil',
    tagline: 'Botanical Retinol Alternative — Luminous Cellular Renewal',
    category: 'Oils',
    subCategory: 'Brightening Elixir',
    basePrice: 0,
    currency: 'NGN',
    variants: [
      { size: '50ml Dropper', price: 0, inStock: true, sku: 'RMY-CRT-50' },
      { size: '100ml Dropper', price: 0, inStock: true, sku: 'RMY-CRT-100' },
      { size: '1 Litre Dispensary', price: 0, inStock: true, sku: 'RMY-CRT-1L' },
    ],
    description:
      'Daucus carota seeds cold-pressed into an amber elixir saturated with beta-carotene, luteolin, and provitamin A. Designed for skin seeking luminous clarity and even tone.',
    benefits: [
      'Encourages gentle cellular turnover and fades hyperpigmentation',
      'Provides a natural, healthy warm radiance to fatigued skin',
      'Potent antioxidant protection against sun-induced free radicals',
      'Firms and plumps slackening facial contours',
    ],
    bioactiveCompounds: ['Beta-Carotene', 'Provitamin A', 'Carotol', 'Flavonoids'],
    extractionMethod: 'Cold Hydraulic Press Extraction',
    botanicalSource: 'Daucus carota (Wild Carrot Seed)',
    origin: 'Plateau & Niger States, Nigeria',
    usageInstructions:
      'Massage 2-3 drops into clean skin every evening. Excellent when paired with Baobab oil for dual brightening and moisture sealing.',
    images: {
      primary: carrotOil,
      gallery: [carrotOil],
      alt: "Ramy's Carrot Oil dropper bottle",
    },
    certifications: ['NAFDAC Certified', 'FDA Registered Facility'],
    inStock: true,
    isBestseller: true,
    rating: 4.92,
    reviewCount: 29,
  },
  {
    id: 'massage-oil-50ml',
    name: "Ramy's Massage Oil 50ml",
    slug: 'massage-oil-50ml',
    tagline: 'Soothing & Relaxing Body Massage Blend',
    category: 'Oils',
    subCategory: 'Body Massage Oil',
    basePrice: 0,
    currency: 'NGN',
    variants: [
      { size: '50ml Bottle', price: 0, inStock: true, sku: 'RMY-MSG-50' },
    ],
    description:
      'A carefully blended massage oil formulated for deep muscular relaxation and skin nourishment. Glides smoothly, absorbs well, and leaves skin feeling soft and conditioned.',
    benefits: [
      'Promotes deep muscular relaxation',
      'Nourishes and softens skin during and after massage',
      'Absorbs without heavy residue',
      'Suitable for full body and targeted massage',
    ],
    bioactiveCompounds: ['Botanical Carrier Oils', 'Natural Emollients'],
    extractionMethod: 'Blended from cold-pressed botanical oils',
    botanicalSource: 'Proprietary botanical blend',
    origin: 'Minna, Niger State, Nigeria',
    usageInstructions:
      'Warm a small amount between palms and apply with gentle, circular massage strokes to desired area.',
    images: {
      primary: massageOilPair,
      gallery: [massageOilPair],
      alt: "Ramy's Massage Oil 50ml, pair of bottles",
    },
    certifications: ['NAFDAC Certified'],
    inStock: true,
    isBestseller: false,
    rating: 4.85,
    reviewCount: 17,
  },
  // ─── SHEA BUTTER ─────────────────────────────────────────────────────────
  {
    id: 'shea-butter-400g',
    name: 'Shea Butter 400g',
    slug: 'shea-butter-400g',
    tagline: 'Moisturize and Heal — Grade-A Wild Harvested Deep Lipid Therapy',
    category: 'Butters',
    subCategory: 'Body & Hair Butter',
    basePrice: 0,
    currency: 'NGN',
    variants: [
      { size: '400g Jar', price: 0, inStock: true, sku: 'RMY-SHB-400' },
    ],
    description:
      'Handcrafted through traditional water-extraction by women cooperatives in Minna, preserving complete cinnamic acid esters and unsaponifiable lipids. Pure, unbleached, and unfragranced, melting upon touch into a restorative barrier balm.',
    benefits: [
      'Intensive repair for chapped lips, elbows, heels, and winter dry skin',
      'Seals moisture into natural curls, preventing split ends and breakage',
      'Rich in cinnamic acid, which offers soothing anti-inflammatory comfort',
      'Safe for infants, pregnant mothers, and highly sensitive skin',
    ],
    bioactiveCompounds: ['Cinnamic Acid Esters', 'Allantoin', 'Stearic & Oleic Acids', 'Vitamin E'],
    extractionMethod: 'Traditional Cold Water Separation & Decantation',
    botanicalSource: 'Vitellaria paradoxa (Shea Karite)',
    origin: 'Savannah Belt, Niger State',
    usageInstructions:
      'Melt a coin-sized amount between warm fingers and smooth across dry zones, stretch marks, or hair ends.',
    images: {
      primary: sheaButter,
      gallery: [sheaButter],
      alt: "Ramy's Shea Butter in 400g jars",
    },
    certifications: ['NAFDAC Certified', 'Ethically Sourced', 'Co-op Empowered'],
    inStock: true,
    isBestseller: true,
    rating: 4.97,
    reviewCount: 56,
    featuredQuote: 'Transformed my dry, flaky skin into the softest it has ever been.',
  },
  // ─── BODY CARE ───────────────────────────────────────────────────────────
  {
    id: 'body-care-set',
    name: "Ramy's Body Care Set",
    slug: 'body-care-set',
    tagline: 'Complete Botanical Body Care Ritual — Wash, Oil, Lotion & Butter',
    category: 'Sets',
    subCategory: 'Body Care Collection',
    basePrice: 0,
    currency: 'NGN',
    variants: [
      { size: 'Full Set', price: 0, inStock: true, sku: 'RMY-BCS-SET' },
    ],
    description:
      "A curated body care set comprising Shea Butter Body Wash, Shea Nut Oil, Body Lotion, and Body Butter. Everything you need for a complete, nourishing botanical body-care ritual.",
    benefits: [
      'Complete head-to-toe botanical body care in one set',
      'Shea-infused formulas for deep lasting moisture',
      'Free from harsh synthetic additives',
      'Makes an exceptional gift for any occasion',
    ],
    bioactiveCompounds: ['Shea Butter Derivatives', 'Natural Emollients', 'Botanical Extracts'],
    extractionMethod: 'Formulated from cold-pressed botanical bases',
    botanicalSource: 'Vitellaria paradoxa & botanical blends',
    origin: 'Minna, Niger State, Nigeria',
    usageInstructions:
      'Use the body wash in the shower, apply the body lotion after drying, and finish with the body butter on very dry areas.',
    images: {
      primary: bodyCareSet,
      gallery: [bodyCareSet],
      alt: "Ramy's Body Care Set — shea butter body wash, shea nut oil, body lotion, and body butter",
    },
    certifications: ['NAFDAC Certified'],
    inStock: true,
    isBestseller: false,
    rating: 4.9,
    reviewCount: 14,
  },
];
