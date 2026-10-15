export interface ProductVariant {
  size: string;
  price: number; // in NGN
  sku?: string;
  inStock: boolean;
}

export interface Product {
  id: string | number;
  name: string;
  slug: string;
  tagline: string;
  category: 'Oils' | 'Butters' | 'Powders' | 'Sets' | 'Body Care';
  subCategory?: string;
  basePrice: number; // in NGN
  currency: string;
  variants: ProductVariant[];
  description: string;
  benefits: string[];
  bioactiveCompounds: string[];
  extractionMethod: string;
  botanicalSource: string;
  origin: string;
  usageInstructions: string;
  images: {
    primary: string;
    gallery: string[];
    alt: string;
  };
  certifications: string[];
  inStock: boolean;
  isBestseller?: boolean;
  rating: number;
  reviewCount: number;
  featuredQuote?: string;
}

export interface CartItem {
  id: string; // composite key: `${product.id}-${selectedSize}`
  product: Product;
  selectedSize: string;
  quantity: number;
  unitPrice: number;
}

export interface WholesaleEnquiry {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: 'Spa & Wellness' | 'Cosmetic Formulator' | 'Retail Boutique' | 'Bulk Distributor' | 'Other';
  productsOfInterest: string[];
  estimatedVolume: 'Sample Kit' | 'Cartons (24-100 pcs)' | 'Bulk Drums (25L - 200L)' | 'Custom Export';
  targetDate?: string;
  deliveryLocation: string;
  notes: string;
}

export interface FilterState {
  category: string;
  concern: string;
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
}
