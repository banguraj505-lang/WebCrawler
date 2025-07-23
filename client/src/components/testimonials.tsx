import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "Business Owner",
      initials: "JS",
      content: "Excellent service and professional staff. They handled my document printing and lamination needs perfectly. Highly recommended!",
      color: "bg-primary"
    },
    {
      name: "Maria Johnson", 
      role: "University Student",
      initials: "MJ",
      content: "Their university registration assistance was invaluable. They made the complex process simple and stress-free. Thank you!",
      color: "bg-secondary"
    },
    {
      name: "Robert Kim",
      role: "Entrepreneur", 
      initials: "RK",
      content: "Fast, reliable financial services. The Western Union transfers were processed quickly and securely. Great experience!",
      color: "bg-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by hundreds of satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold`}>
                  <span>{testimonial.initials}</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-neutral-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
