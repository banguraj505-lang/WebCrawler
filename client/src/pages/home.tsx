import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import FinancialServices from "@/components/financial-services";
import EducationServices from "@/components/education-services";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <FinancialServices />
      <EducationServices />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
