import React from "react";
import HeroSection from "../components/landing/HeroSection";
import IndustriesSection from "../components/landing/IndustriesSection";
import ServicesSection from "../components/landing/ServicesSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";

export default function Landing() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
    </div>
  );
}