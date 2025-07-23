import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Trusted Business 
              <span className="text-blue-200"> Service Partner</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              From printing and financial services to university registration assistance, 
              we provide comprehensive business solutions with reliability and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToServices}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50"
                size="lg"
              >
                Explore Services
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary"
                size="lg"
              >
                Get Quote
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern business office environment" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
