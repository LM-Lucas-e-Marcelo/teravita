import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Services } from "@/components/ui/services";
import { About } from "@/components/about";
import { Testimonials } from "@/components/ui/testimonials";
import { Questions } from "@/components/ui/questions";
import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
import { Office } from "@/components/ui/office";

export default function Index() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <Services />
      <About />
      <Office />
      <Testimonials />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}
