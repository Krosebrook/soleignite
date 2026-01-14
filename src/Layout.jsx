import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, ArrowUpRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", href: createPageUrl("Landing") },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: createPageUrl("Contact") },
];

// Safe fix: Removed unused imports and variables that don't affect functionality
export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          :root {
            --navy: #0f172a;
            --navy-light: #1e293b;
            --gold: #f59e0b;
            --gold-light: #fbbf24;
            --cream: #fefce8;
            --gray-50: #f8fafc;
            --gray-100: #f1f5f9;
            --gray-600: #475569;
            --gray-800: #1e293b;
          }
          
          .gradient-hero {
            background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
          }
          
          .gradient-gold {
            background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
          }
          
          .text-gradient {
            background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .glass-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(245, 158, 11, 0.1);
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl("Landing")} className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="text-xl font-bold" style={{ color: 'var(--navy)' }}>
                    Sole Much Better
                  </div>
                  <div className="text-xs text-gray-600 -mt-1">
                    Chicago HQ • Global Activations
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <Button className="gradient-gold text-white hover:opacity-90 transition-opacity">
                Get Started
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-left">Sole Much Better</SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block py-3 text-lg font-medium text-gray-600 hover:text-gray-900 border-b border-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button className="w-full mt-6 gradient-gold text-white">
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="text-xl font-bold">Sole Much Better</div>
                  <div className="text-sm text-gray-400">
                    Chicago HQ • Global Activations
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Premium custom shoes, apparel, and branding solutions for enterprise clients worldwide.
              </p>
              <div className="text-sm text-gray-400">
                <p>Chicago Headquarters</p>
                <p>Global Activation Network</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Custom Shoes</li>
                <li>Premium Apparel</li>
                <li>Branding Solutions</li>
                <li>Event Activations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Tech Conferences</li>
                <li>Sports & Athletics</li>
                <li>Lifestyle Brands</li>
                <li>CPG Companies</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sole Much Better. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}