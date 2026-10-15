import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AppLayout } from './components/layout/AppLayout';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { StoryPage } from './pages/StoryPage';
import { ProcessPage } from './pages/ProcessPage';
import { WholesalePage } from './pages/WholesalePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export const RamysApp: React.FC = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="product/:id" element={<ProductDetailPage />} />
            <Route path="story" element={<StoryPage />} />
            <Route path="process" element={<ProcessPage />} />
            <Route path="wholesale" element={<WholesalePage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="terms" element={<LegalPage />} />
            <Route path="privacy" element={<LegalPage />} />
            <Route path="shipping" element={<LegalPage />} />
            <Route path="returns" element={<LegalPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default RamysApp;
