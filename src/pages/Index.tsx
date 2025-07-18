import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import logo from "@/assets/teravita.png";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Heart,
  Users,
  Brain,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  PlayCircle,
  Clock,
  Shield,
  Calendar,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen scroll-smooth">
      {/* Header */}
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
            <Button className="text-white">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Consulta
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
                  Oferecemos terapias especializadas para crianças e
                  adolescentes. Nossa clínica é um espaço acolhedor onde você
                  encontra o apoio necessário para seu bem-estar.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  Agendar Consulta
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  Conhecer Serviços
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  +200 pacientes atendidos
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary via-primary to-teravita-500 p-8">
                <img
                  src="https://psicologiametepec.com/wp-content/uploads/2021/08/f7d01343-ed71-4106-b5d9-6fc1b3997044-770x499.jpeg"
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
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop&crop=face"
                    alt="Criança feliz em terapia"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute bottom-20 -right-8 hidden lg:block">
                <div className="w-28 h-28 rounded-xl overflow-hidden shadow-lg border-4 border-white -rotate-12">
                  <img
                    src="https://interfisio.com.br/wp-content/uploads/2016/11/crian%C3%A7a-feliz-barulhenta-inquieta.png"
                    alt="Criança brincando"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços terapêuticos
              personalizados para cada fase da vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Terapia Ocupacional",
                description:
                  "Desenvolvimento de habilidades motoras, cognitivas e de vida diária para maior autonomia e qualidade de vida.",
                features: [
                  "Integração sensorial",
                  "Coordenação motora",
                  "Atividades de vida diária",
                ],
                image:
                  "https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=600&h=400&fit=crop",
              },
              {
                icon: Users,
                title: "Fonoaudiologia",
                description:
                  "Tratamento especializado em comunicação, linguagem, fala e deglutição para todas as idades.",
                features: [
                  "Desenvolvimento da fala",
                  "Linguagem oral e escrita",
                  "Deglutição",
                ],
                image:
                  "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
              },
              {
                icon: Heart,
                title: "Psicologia Infantil",
                description:
                  "Acompanhamento psicológico para desenvolvimento emocional e comportamental saudável.",
                features: [
                  "Desenvolvimento emocional",
                  "Comportamento",
                  "Relacionamentos",
                ],
                image:
                  "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&h=400&fit=crop",
              },
              {
                icon: Sparkles,
                title: "Estimulação Precoce",
                description:
                  "Intervenção especializada nos primeiros anos de vida para otimizar o desenvolvimento.",
                features: ["0-3 anos", "Desenvolvimento global", "Prevenção"],
                image:
                  "https://images.unsplash.com/photo-1612198180842-de01267fda53?w=600&h=400&fit=crop",
              },
              {
                icon: CheckCircle,
                title: "Avaliação Multidisciplinar",
                description:
                  "Avaliação completa com equipe multidisciplinar para diagnóstico preciso e plano terapêutico.",
                features: [
                  "Equipe especializada",
                  "Diagnóstico preciso",
                  "Plano personalizado",
                ],
                image:
                  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
              },
              {
                icon: PlayCircle,
                title: "Orientação Familiar",
                description:
                  "Suporte e orientação para famílias, fortalecendo vínculos e estratégias de cuidado.",
                features: [
                  "Suporte aos pais",
                  "Estratégias de cuidado",
                  "Fortalecimento familiar",
                ],
                image:
                  "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-00/30 to-teravita-200/30 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary to-teravita-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Sobre Nós
              </h2>
              <p className="text-lg text-muted-foreground">
                A TeraVita é uma clínica especializada em terapias que nasceu do
                sonho de oferecer cuidado integral à saúde mental. Fundada em
                2018, nossa clínica tem como missão proporcionar um espaço
                seguro e acolhedor onde pessoas de todas as idades possam
                encontrar apoio para superar desafios e desenvolver seu
                potencial máximo.
              </p>
              <p className="text-lg text-muted-foreground">
                Nossa equipe é formada por psicólogos especializados e altamente
                qualificados, com formação em diferentes abordagens
                terapêuticas. Acreditamos que cada pessoa é única e merece um
                atendimento personalizado, respeitando suas necessidades
                individuais e ritmo de desenvolvimento.
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
                    src="https://www.clinicaluma.com.br/imagens/informacoes/clinica-multidisciplinar-infantil-zona-leste-02.jpg"
                    alt="Consultório"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-xl bg-accent/20 overflow-hidden">
                  <img
                    src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdHAufGAQ9yB8nj2yk16dxYYRLz9KjbX4azk_e8ph8iRxBGSOiej4Fi8lQnWv2CrB4VODBPKRcgwPUTSc5zO2sxau7qrysaPbNIjn0M2ZxnA9ZnacKC-BbMYOiarv-SthsiaSLqig?key=BfO5PGwMP_lQDnMw4kIPwV_E"
                    alt="Sala de terapia"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-[4/3] rounded-xl bg-secondary/20 overflow-hidden">
                  <img
                    src="https://www.psicologo.com.br/wp-content/uploads/terapia-infantil-psicologo.jpg"
                    alt="Espaço infantil"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl bg-muted/40 overflow-hidden">
                  <img
                    src="https://inpaonline.com.br/wp-content/uploads/2024/12/terapia-infantil-1024x597.jpg"
                    alt="Recepção"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que nossos pacientes dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Depoimentos reais de pessoas que transformaram suas vidas através
              da terapia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Mãe de paciente",
                content:
                  "A terapia com a equipe da TeraVita transformou a vida do meu filho. Ele desenvolveu mais confiança e melhorou muito na escola. Recomendo de coração!",
                rating: 5,
              },
              {
                name: "João Santos",
                role: "Paciente",
                content:
                  "Encontrei na TeraVita o apoio que precisava para superar a ansiedade. O ambiente é acolhedor e os profissionais são extremamente qualificados.",
                rating: 5,
              },
              {
                name: "Ana Costa",
                role: "Paciente adolescente",
                content:
                  "A terapia me ajudou a entender melhor meus sentimentos e a lidar com as pressões da adolescência. Me sinto muito mais confiante agora.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                  Como funciona a primeira consulta?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  A primeira consulta é um momento de acolhimento onde
                  conversamos sobre suas necessidades, expectativas e histórico.
                  Fazemos uma avaliação inicial para entender melhor sua
                  situação e definir o melhor plano terapêutico personalizado
                  para você. Esta sessão dura aproximadamente 50 minutos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-none bg-card rounded-xl shadow-sm"
              >
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                  Qual a frequência das sessões de terapia?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Geralmente recomendamos sessões semanais, mas a frequência
                  pode variar conforme suas necessidades e disponibilidade.
                  Algumas pessoas se beneficiam de sessões quinzenais, enquanto
                  outras podem precisar de encontros mais frequentes em momentos
                  específicos. Isso é definido em conjunto com seu terapeuta.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-none bg-card rounded-xl shadow-sm"
              >
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                  Quanto tempo dura um processo terapêutico?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Não há um tempo fixo para o processo terapêutico. Cada pessoa
                  tem seu próprio ritmo e necessidades específicas. Alguns
                  objetivos podem ser alcançados em poucos meses, enquanto
                  outros processos mais profundos podem levar mais tempo. O
                  importante é respeitar seu tempo e necessidades.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-none bg-card rounded-xl shadow-sm"
              >
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                  Vocês atendem planos de saúde?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Sim, atendemos diversos planos de saúde. Recomendamos
                  verificar com seu plano quais são as condições de cobertura
                  para psicoterapia. Nossa equipe também pode auxiliar com
                  informações sobre reembolso e documentação necessária. Entre
                  em contato para verificar se seu plano é aceito.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="border-none bg-card rounded-xl shadow-sm"
              >
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                  É possível fazer terapia online?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Sim, oferecemos atendimento online através de plataformas
                  seguras e confidenciais. A terapia online tem se mostrado
                  muito eficaz e oferece maior flexibilidade de hor��rios e
                  localização. É uma excelente opção para quem tem dificuldades
                  de locomoção ou prefere o conforto de casa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="border-none bg-card rounded-xl shadow-sm"
              >
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                  Como sei qual tipo de terapia é melhor para mim?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Durante a primeira consulta, nosso terapeuta irá avaliar suas
                  necessidades e características pessoais para recomendar a
                  abordagem mais adequada. Oferecemos diferentes modalidades
                  como terapia cognitivo-comportamental, psicanalítica,
                  sistêmica, entre outras. O mais importante é que você se sinta
                  confortável com o profissional e a abordagem escolhida.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="border-none bg-card rounded-xl shadow-sm"
              >
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                  A terapia infantil é diferente da terapia para adultos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Sim, a terapia infantil utiliza técnicas específicas para a
                  idade da criança, como ludoterapia (terapia através do
                  brincar), arteterapia e outras abordagens lúdicas. Os pais
                  também são envolvidos no processo, recebendo orientações sobre
                  como apoiar o desenvolvimento emocional da criança em casa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-8"
                className="border-none bg-card rounded-xl shadow-sm"
              >
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-accent/50 rounded-xl font-semibold text-foreground">
                  Como posso agendar uma consulta?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  Você pode agendar através do nosso telefone (21) 99999-9999,
                  WhatsApp, e-mail contato@teravita.com.br ou preenchendo o
                  formulário de contato em nosso site. Nossa equipe entrará em
                  contato para confirmar o horário mais conveniente para você.
                  Temos horários flexíveis, incluindo manhã, tarde e início da
                  noite.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos aqui para ajudar você. Agende sua consulta ou tire suas
              dúvidas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      Telefone
                    </h3>
                    <p className="text-muted-foreground">(21) 99999-9999</p>
                    <p className="text-muted-foreground">(21) 3333-3333</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      E-mail
                    </h3>
                    <p className="text-muted-foreground">
                      contato@teravita.com.br
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Localização
                      </h3>
                      <p className="text-muted-foreground">
                        Rua das Laranjeiras, 123 - Laranjeiras
                        <br />
                        Rio de Janeiro - RJ, 22240-000
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Horário de Funcionamento
                      </h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Segunda a Sexta: 8h às 19h</p>
                        <p>Sábado: 8h às 14h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Agende sua Consulta</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato em breve
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                        placeholder="(21) 99999-9999"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Tipo de Terapia
                    </label>
                    <select className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background">
                      <option>Selecione uma opção</option>
                      <option>Terapia Infantil</option>
                      <option>Terapia de Adolescentes</option>
                      <option>Terapia Familiar</option>
                      <option>Neuropsicologia</option>
                      <option>Psicopedagogia</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      Mensagem
                    </label>
                    <textarea
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                      rows={4}
                      placeholder="Conte-nos um pouco sobre sua necessidade..."
                    ></textarea>
                  </div>
                  <Button className="w-full" size="lg">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li>Terapia Infantil</li>
                <li>Terapia de Adolescentes</li>
                <li>Terapia Familiar</li>
                <li>Neuropsicologia</li>
                <li>Psicopedagogia</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Contato</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>(21) 99999-9999</li>
                <li>contato@teravita.com.br</li>
                <li>Rua das Laranjeiras, 123</li>
                <li>Rio de Janeiro - RJ</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Horários</h3>
              <ul className="space-y-2 text-sm text-white">
                <li>Segunda a Sexta: 8h às 19h</li>
                <li>Sábado: 8h às 14h</li>
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
    </div>
  );
}
