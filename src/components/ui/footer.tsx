import logo from "@/assets/teravita.png";

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
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-white">
              {[
                "Terapia Ocupacional",
                "Nutrição",
                "Fonoaudiologia",
                "Psicologia e Psicoterapia",
                "Programas de Habilidades Sociais",
                "Terapia Comportamental Aplicada (ABA)",
                "Fisioterapia Motora",
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
                <a href="tel:2141414725">(21) 4141-4725</a>
              </li>
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
              <li>Segunda a Sexta: 9h às 18h</li>
              <li>Sábado: 10h às 14h</li>
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
