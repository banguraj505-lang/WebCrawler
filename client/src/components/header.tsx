import { useState } from "react";
import { Briefcase, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Briefcase className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-neutral-dark">ProServe</h1>
              <p className="text-sm text-gray-600">Business Solutions</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-neutral-dark hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('financial')}
              className="text-neutral-dark hover:text-primary transition-colors font-medium"
            >
              Financial
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-neutral-dark hover:text-primary transition-colors font-medium"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-neutral-dark hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-light border-t">
          <div className="px-4 py-3 space-y-2">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-neutral-dark hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('financial')}
              className="block w-full text-left py-2 text-neutral-dark hover:text-primary transition-colors font-medium"
            >
              Financial
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="block w-full text-left py-2 text-neutral-dark hover:text-primary transition-colors font-medium"
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-neutral-dark hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
