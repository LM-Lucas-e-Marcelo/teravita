import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Questions = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e como podemos ajudar você
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="border-none bg-card rounded-xl shadow-sm"
            >
              <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                Quanto tempo leva para iniciar o tratamento na TeraVita?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                O tempo para iniciar o tratamento na TeraVita pode variar
                conforme a disponibilidade de horários e a demanda por serviços.
                Após o agendamento da avaliação inicial, faremos o possível para
                iniciar o tratamento o mais rapidamente possível, considerando
                as necessidades específicas de cada paciente. Nossa equipe está
                comprometida em oferecer um atendimento de qualidade,
                personalizado e eficiente desde o primeiro contato até o início
                das terapias adequadas ao desenvolvimento saudável e à
                felicidade das crianças.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-none bg-card rounded-xl shadow-sm"
            >
              <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                Estão aceitando novos pacientes na TeraVita?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Sim, estamos abertos para receber novos pacientes na TeraVita.
                Estamos aqui para ajudar você e seu filho(a) a alcançarem seu
                potencial máximo através de terapias personalizadas e cuidados
                especializados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-none bg-card rounded-xl shadow-sm"
            >
              <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                A Clínica Teravita oferece suporte educacional para os pais?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Sim, oferecemos orientação e suporte para pais e cuidadores,
                fornecendo estratégias para apoiar o desenvolvimento de seus
                filhos em casa.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border-none bg-card rounded-xl shadow-sm"
            >
              <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                A Clínica Teravita aceita planos de saúde?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Não aceitamos planos de saúde. No entanto, orientamos a opção de
                reembolso para pacientes que possuem convênios. Recomendamos
                verificar com seu plano de saúde sobre as políticas de reembolso
                antes de agendar uma avaliação.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border-none bg-card rounded-xl shadow-sm"
            >
              <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                Qual é a idade dos pacientes atendidos?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Atendemos crianças e adolescentes até 18 anos de idade.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border-none bg-card rounded-xl shadow-sm"
            >
              <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                Como posso agendar uma avaliação ou terapia?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Você pode agendar facilmente ligando para (21) 96444-1924, que
                também é nosso WhatsApp.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
