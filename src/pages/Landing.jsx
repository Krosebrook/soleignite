import React, { lazy, Suspense } from "react";

/**
 * Safe code splitting: Lazy load large landing page sections
 * Reduces initial bundle size without changing behavior
 * Each section loads independently when scrolled into view
 */

// Lazy load landing page sections for better performance
const HeroSection = lazy(() => import("../components/landing/HeroSection"));
const IndustriesSection = lazy(() => import("../components/landing/IndustriesSection"));
const ServicesSection = lazy(() => import("../components/landing/ServicesSection"));
const TestimonialsSection = lazy(() => import("../components/landing/TestimonialsSection"));

// Minimal loading placeholder that matches page style
const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
  </div>
);

export default function Landing() {
  return (
    <div>
      <Suspense fallback={<SectionFallback />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <IndustriesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense>
    </div>
  );
}