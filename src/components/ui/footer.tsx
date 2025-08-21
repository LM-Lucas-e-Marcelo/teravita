import logo from "@/assets/teravita.png";
import { SocialMedias } from "./social-medias";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-teravita-500 border-t py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="TeraVita Logo" width={150} />
            </div>
            <p className="text-sm text-white">
              Clínica de Terapias especializada em cuidar da sua saúde mental
              com carinho e profissionalismo.
            </p>
            <SocialMedias />
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-white">
              {[
                "Terapia Ocupacional",
                "Nutrição",
                "Fonoaudiologia",
                "Psicoterapia com Abordagem em TCC - Terapia Cognitivo Comportamental",
                "Programas de Habilidades Sociais",
                "Análise do Comportamento Aplicada (ABA)",
                "Fisioterapia Motora - método Cuevas Medek Exercises (CME)",
                "Terapia Alimentar",
                "Musicoterapia",
              ].map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-white">
              <li className="text-white">
                <a href="tel:21964441924">(21) 96444-1924</a>
              </li>
              <li>
                <a href="mailto:info@teravita.com.br" className="text-white">
                  info@teravita.com.br
                </a>
              </li>
              <li>Rua Desembargador Izidro, 40. Salas 104/105.</li>
              <li>Tijuca, Rio de Janeiro – RJ.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Horários</h3>
            <ul className="space-y-2 text-sm text-white">
              <li>Segunda a Sexta: 8h às 17h</li>
              <li>Sábado: 08h às 12h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-white">
            © 2024 TeraVita - Clínica de Terapias. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
