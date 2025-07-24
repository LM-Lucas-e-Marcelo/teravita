import { Calendar } from "lucide-react";
import logo from "@/assets/teravita.png";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const handleRedirectToWhatsapp = () => {
    window.open("https://wa.me/5521964441924", "_blank");
  };
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary to-teravita-500">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="TeraVita Logo" width={150} />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#inicio"
              className="text-white hover:underline transition-colors"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-white hover:underline transition-colors"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-white hover:underline transition-colors"
            >
              Sobre Nós
            </a>
            <a
              href="#depoimentos"
              className="text-white hover:underline transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className="text-white hover:underline transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contato"
              className="text-white hover:underline transition-colors"
            >
              Contato
            </a>
          </nav>
          <Button onClick={handleRedirectToWhatsapp} className="text-white">
            <Calendar className="w-4 h-4 mr-2" />
            Agendar Consulta
          </Button>
        </div>
      </div>
    </header>
  );
};
