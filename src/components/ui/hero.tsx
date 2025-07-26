import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, CheckCircle } from "lucide-react";
import girl from "@/assets/hero/girl.jpeg";
import happyGirl from "@/assets/hero/happy_girl.png";
import women from "@/assets/hero/women.jpeg";
import { SocialMedias } from "./social-medias";

export const Hero = () => {
  const handleRedirectToWhatsapp = () => {
    window.open("https://wa.me/5521964441924", "_blank");
  };

  return (
    <section
      id="inicio"
      className="relative bg-[url(/wp.jpg)] bg-cover py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/30 to-secondary/20 backdrop-blur-sm z-0" />
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-white font-medium">
                Bem-vindo à TeraVita
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Cuidando da sua{" "}
                <span className="text-primary">saúde mental</span> com carinho
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Oferecemos terapias especializadas para crianças e adolescentes.
                Nossa clínica é um espaço acolhedor onde você encontra o apoio
                necessário para seu bem-estar.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg"
                onClick={handleRedirectToWhatsapp}
              >
                Agendar Consulta
              </Button>
              <a href="#servicos" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg w-full sm:w-auto"
                >
                  Conhecer Serviços
                </Button>
              </a>
            </div>
            <SocialMedias />
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">5/5</span>
              </div>
              <div className="text-sm text-black">
                Avaliação máxima entre nossos pacientes
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary via-primary to-teravita-500 p-8">
              <img
                src={women}
                alt="Terapeuta trabalhando com criança"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-teravita-100">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-semibold text-gray-900">
                    Ambiente Acolhedor
                  </div>
                  <div className="text-sm text-gray-600">
                    Espaço pensado para o bem-estar
                  </div>
                </div>
              </div>
            </div>

            {/* Additional floating image cards */}
            <div className="absolute top-8 -left-8 hidden lg:block">
              <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white rotate-12">
                <img
                  src={girl}
                  alt="Criança feliz em terapia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-20 -right-8 hidden lg:block">
              <div className="w-28 h-28 rounded-xl overflow-hidden shadow-lg border-4 border-white -rotate-12">
                <img
                  src={happyGirl}
                  alt="Criança brincando"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
