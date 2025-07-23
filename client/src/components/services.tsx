import { useState } from "react";
import { Printer, Shield, Handshake, Clock, Phone, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceFormModal from "./service-form-modal";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const openServiceModal = (serviceType: string) => {
    setSelectedService(serviceType);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Business Hours & Quick Info */}
      <section className="bg-neutral-light py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Clock className="text-primary text-xl" />
              <div>
                <p className="font-semibold text-neutral-dark">Business Hours</p>
                <p className="text-sm text-gray-600">Mon-Fri: 8AM-6PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-primary text-xl" />
              <div>
                <p className="font-semibold text-neutral-dark">Call Us</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-primary text-xl" />
              <div>
                <p className="font-semibold text-neutral-dark">Location</p>
                <p className="text-sm text-gray-600">Downtown Business District</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheck className="text-secondary text-xl" />
              <div>
                <p className="font-semibold text-neutral-dark">Trusted Service</p>
                <p className="text-sm text-gray-600">Licensed & Insured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional business services designed to meet all your document, financial, and administrative needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Printing Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Printer className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-4">Printing & Copying</h3>
              <p className="text-gray-600 mb-6">High-quality printing, photocopying, and document reproduction services with quick turnaround times.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Black & White Printing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Color Printing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Large Format Printing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Document Binding
                </li>
              </ul>
              <Button 
                onClick={() => openServiceModal("printing")}
                className="w-full bg-primary text-white hover:bg-blue-700"
              >
                Request Service
              </Button>
            </div>

            {/* Laminating Services */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-4">Laminating Services</h3>
              <p className="text-gray-600 mb-6">Professional document lamination to protect and preserve your important documents and certificates.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  ID Card Lamination
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Certificate Protection
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Menu Lamination
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Custom Sizes Available
                </li>
              </ul>
              <Button 
                onClick={() => openServiceModal("laminating")}
                className="w-full bg-secondary text-white hover:bg-green-700"
              >
                Request Service
              </Button>
            </div>

            {/* Business Support */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Handshake className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-4">Business Support</h3>
              <p className="text-gray-600 mb-6">Comprehensive business assistance including document preparation, consultation, and administrative support.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Document Preparation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Business Consultation
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Administrative Support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                  Notary Services
                </li>
              </ul>
              <Button 
                onClick={() => openServiceModal("business-support")}
                className="w-full bg-purple-600 text-white hover:bg-purple-700"
              >
                Get Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServiceFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceType={selectedService}
      />
    </>
  );
}
