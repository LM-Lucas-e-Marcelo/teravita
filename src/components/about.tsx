import { Heart, Users, Shield } from "lucide-react";
import mini9 from "@/assets/office/mini9.jpg";
import mini4 from "@/assets/office/mini4.jpg";
import mini6 from "@/assets/office/mini6.jpg";
import mini7 from "@/assets/office/mini7.jpg";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sobre Nós
            </h2>
            <p className="text-lg text-muted-foreground">
              A TeraVita é uma clínica especializada em terapias voltada para o
              cuidado integral da saúde mental de crianças e adolescentes.
              Fundada em 2018, nasceu do sonho de oferecer um espaço acolhedor,
              seguro e personalizado, onde cada paciente e sua família encontram
              suporte para superar desafios e desenvolver todo o seu potencial.
            </p>
            <p className="text-lg text-muted-foreground">
              Nosso compromisso é com o bem-estar e o desenvolvimento pleno,
              respeitando o ritmo, as necessidades e as singularidades de cada
              criança. Para isso, contamos com uma equipe multidisciplinar
              formada por psicólogos, terapeutas ocupacionais e analistas do
              comportamento (ABA), que atuam de forma integrada para garantir um
              atendimento completo e humanizado.
            </p>
            <p className="text-lg text-muted-foreground">
              Mais do que uma clínica, a TeraVita é uma parceira no crescimento
              dos seus filhos — apoiando cada etapa da jornada com empatia,
              conhecimento técnico e atenção individualizada.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Heart className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Abordagem Humanizada
                  </h3>
                  <p className="text-muted-foreground">
                    Cada paciente é único e merece cuidado personalizado e
                    respeitoso.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Users className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Equipe Especializada
                  </h3>
                  <p className="text-muted-foreground">
                    Psicólogos qualificados com especializações em diferentes
                    áreas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Shield className="h-3 w-3 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Ambiente Seguro
                  </h3>
                  <p className="text-muted-foreground">
                    Espaço confidencial e acolhedor para seu desenvolvimento
                    pessoal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-xl bg-primary/10 overflow-hidden">
                <img
                  src={mini4}
                  alt="Consultório"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl bg-accent/20 overflow-hidden">
                <img
                  src={mini6}
                  alt="Sala de terapia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="aspect-[4/3] rounded-xl bg-secondary/20 overflow-hidden">
                <img
                  src={mini7}
                  alt="Espaço infantil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl bg-muted/40 overflow-hidden">
                <img
                  src={mini9}
                  alt="Recepção"
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
