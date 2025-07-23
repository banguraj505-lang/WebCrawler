import { Briefcase } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Briefcase className="text-white" size={16} />
              </div>
              <h3 className="text-lg font-bold">ProServe</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted partner for comprehensive business services, financial solutions, and educational support.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <FaTwitter className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Printing & Copying</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Laminating Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Business Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">University Registration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Scratch Card Sales</a></li>
            </ul>
          </div>

          {/* Financial Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Financial Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Western Union</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BnB Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Afrimoney</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Orange Money</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <span className="text-primary mt-1">📍</span>
                <span>123 Business Avenue<br />Downtown District, City 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">✉️</span>
                <span>info@proservebusiness.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2024 ProServe Business Solutions. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
