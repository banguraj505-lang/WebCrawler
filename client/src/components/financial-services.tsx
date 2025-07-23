import { CreditCard, Banknote, Smartphone, University, Shield, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinancialServices() {
  const services = [
    {
      icon: <Banknote className="text-yellow-600" size={32} />,
      name: "Western Union",
      description: "Send and receive money worldwide with trusted Western Union services",
      color: "yellow-600",
      hoverColor: "yellow-700"
    },
    {
      icon: <University className="text-blue-600" size={32} />,
      name: "BnB Services",
      description: "Banking and financial services through our BnB partnership",
      color: "blue-600",
      hoverColor: "blue-700"
    },
    {
      icon: <Smartphone className="text-green-600" size={32} />,
      name: "Afrimoney",
      description: "Mobile money transfers and digital financial services",
      color: "green-600",
      hoverColor: "green-700"
    },
    {
      icon: <CreditCard className="text-orange-600" size={32} />,
      name: "Orange Money",
      description: "Digital payments and mobile financial transactions",
      color: "orange-600",
      hoverColor: "orange-700"
    }
  ];

  return (
    <section id="financial" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Financial Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure and reliable financial transaction services for your convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className={`w-20 h-20 bg-${service.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="text-xs text-gray-500 mb-4">
                <span className="inline-flex items-center bg-secondary bg-opacity-10 text-secondary px-2 py-1 rounded">Available</span>
              </div>
              <Button 
                className={`w-full bg-${service.color} text-white hover:bg-${service.hoverColor} text-sm`}
                size="sm"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Financial Services Features */}
        <div className="mt-12 bg-white rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="text-secondary mx-auto mb-4" size={48} />
              <h4 className="text-lg font-semibold text-neutral-dark mb-2">Secure Transactions</h4>
              <p className="text-gray-600 text-sm">All financial transactions are processed through secure, encrypted channels</p>
            </div>
            <div>
              <Clock className="text-primary mx-auto mb-4" size={48} />
              <h4 className="text-lg font-semibold text-neutral-dark mb-2">Quick Processing</h4>
              <p className="text-gray-600 text-sm">Fast and efficient processing times for all your financial needs</p>
            </div>
            <div>
              <Headphones className="text-purple-600 mx-auto mb-4" size={48} />
              <h4 className="text-lg font-semibold text-neutral-dark mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Round-the-clock customer support for all financial services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
